const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // MongoDB Cast Error
    if (err.name === "CastError") {
        const message = `Resource not found with this id. Invalid ${err.path}`;
        err = new ErrorHandler(message, 404);
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        const message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
        err = new ErrorHandler(message, 400);
    }

    // JWT Error
    if (err.name === "JsonWebTokenError") {
        const message = "Invalid token, please login again";
        err = new ErrorHandler(message, 401);
    }

    // JWT Expire Error
    if (err.name === "TokenExpiredError") {
        const message = "Token has expired, please login again";
        err = new ErrorHandler(message, 401);
    }

    // Validation Error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(value => value.message).join(', ');
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        error: process.env.NODE_ENV === 'development' ? err : undefined
    });
};