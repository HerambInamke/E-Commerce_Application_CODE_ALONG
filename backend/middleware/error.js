const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    // Set default error properties
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Handle Mongoose CastError (invalid ObjectId)
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate field value entered: ${Object.keys(err.keyValue).join(", ")}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle JWT errors
    if (err.name === "JsonWebTokenError") {
        const message = `Invalid token provided.`;
        err = new ErrorHandler(message, 400);
    }

    // Handle expired JWT errors
    if (err.name === "TokenExpiredError") {
        const message = `Token has expired. Please try again.`;
        err = new ErrorHandler(message, 400);
    }

    // Log the error for debugging purposes
    console.error(`❌ Error: ${err.message} | Status Code: ${err.statusCode}`);

    // Send error response
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
