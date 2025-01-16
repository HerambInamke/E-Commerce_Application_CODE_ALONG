const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email."],
        unique: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address.",
        ],
    },
    password: {
        type: String,
        required: [true, "Please enter your password."],
        minlength: [4, "Password should be greater than 4 characters."],
        select: false, // Exclude password from queries by default
    },
    phoneNumber: {
        type: Number,
        unique: true,
        sparse: true, // Allows null values while enforcing uniqueness
    },
    addresses: [
        {
            country: { type: String, trim: true },
            city: { type: String, trim: true },
            address1: { type: String, trim: true },
            address2: { type: String, trim: true },
            zipCode: { type: Number },
            addressType: { type: String, enum: ["home", "work", "other"] },
        },
    ],
    role: {
        type: String,
        enum: ["user", "admin"],
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
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

// Hash password before saving the user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Generate JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// Remove sensitive data when converting to JSON or Object
userSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret;
    },
});

userSchema.set("toObject", {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret;
    },
});

module.exports = mongoose.model("User", userSchema);
