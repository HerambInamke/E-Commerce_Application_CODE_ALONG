const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Password should be greater than 6 characters"],
        select: false
    },
    phoneNumber: {
        type: Number,
        },
    addresses:[
        {
            country:{
                type:String
            },
            city:{
                type:String
            },
            address1:{
                type:String
            },
            address2:{
                type:String
            },
            zipCode:{
                type:Number
            },
            addressType:{
                type:String
            }
        }
    ],
    role:{
        type:String,
        default:"user",
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
    },
    createdAt: {
        type: DataTransfer,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordToken: Date,
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
};

userSchema.methods.comparePassword = async function(emteredPassword){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model("User", userSchema);