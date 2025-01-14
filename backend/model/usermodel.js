const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [4, "Password should be greater than 4 characters"],
        select: false,
    },
    phoneNumber:{
        type: Number,
    },
    addresses: [
        {
            country:{type: String,},
            city:{type: String,},
            address1:{type: String,},
            address2:{type: String,},
            zipCode:{type: Number,},
            addressTYPE:{type: String,},
        }
    ],
    role: {
        type: String,
        default: "user",
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type:DataTransfer,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

}) 

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);