const express = require("express");
const path = require("path");
const fs =require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../middleware/multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt =require("bcryptjs");
require("dotenv").config();


// create user
router.post("/create-user", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
  console.log("create user");
  const { name, email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    if(req.file){
        const filepath = path.join(__dirname,"../uploads",req.file.filename);
        try{
            fs.unlinkSync(filepath);
        }
        catch(err){
            console.log("Error removing file:",err);
            return res.status(500).json({message: "Error removing file"});
        }
    }

    return next(new ErrorHandler("User already exists",400));

    }
    let fileUrl = "";

    if(req.file){
        fileUrl=path.join("uploads",req.file.filename);
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log("At Create ","Password:", password,"Hash: ",hashedPassword);
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: {
            public_id:req.file?.filename || "",
            url: fileUrl,
        },
    });
console.log(user);

res.status(201).json({ success:true,user});
}));

module.exports=router;