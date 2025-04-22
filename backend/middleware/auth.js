const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../catchAsyncErrors");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require('../model/user');


const isAuthenticatedUser = catchAsyncErrors(async (req, resizeBy, next) => {
    const token = req.cookies.token;

    if(!token) {
        return next(new ErrorHandler("Please login to access this resourese", 401));
    }

    let decodedData;

    try {
        decodedData = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded data:", decodedData);
    } catch (err) {
        console.error("JWT verification error:", err.name, err.message);
        return next(new ErrorHandler("Invalid or expired token", 401));
    }

    req.user = await User.findById(decodedData.id);
    if(!req.user) {
        return next(new ErrorHandler("User not found", 404));
    }

    next();
});

module.exports = {isAuthenticatedUser};