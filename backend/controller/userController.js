const express = require('express');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const { upload } = require('../middleware/multer');
const ErrorHandler = require('../utils/ErrorHandler');
const sendMail = require('../utils/sendMail');
const sendToken = require('../utils/jwtToken');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

const router = express.Router();

// Helper function to delete a file
const deleteFile = (filepath) => {
    try {
        fs.unlinkSync(filepath);
    } catch (error) {
        console.error(`Error deleting file: ${filepath}`, error);
    }
};

// Create a new user
router.post('/create-user', upload.single('file'), catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return next(new ErrorHandler("All fields are required", 400));
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        if (req.file) {
            deleteFile(req.file.path); // Delete uploaded file
        }
        return next(new ErrorHandler("User already exists", 400));
    }

    const avatar = req.file ? path.join(req.file.filename) : null;

    const user = { name, email, password, avatar };

    // Generate activation token
    const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:8000/activation/${activationToken}`;

    try {
        // Send activation email
        await sendMail({
            email: user.email,
            subject: "Account Activation",
            message: `Please click on the link to activate your account: ${activationUrl}`,
        });

        res.status(200).json({
            success: true,
            message: "Account created successfully. Please check your email to activate your account.",
        });
    } catch (error) {
        console.error(error);
        if (req.file) {
            deleteFile(req.file.path); // Clean up uploaded file in case of error
        }
        return next(new ErrorHandler("Failed to send activation email", 500));
    }
}));

// Helper function to create an activation token
const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, { expiresIn: "5m" });
};

// Activate a new user
router.post('/activation', catchAsyncErrors(async (req, res, next) => {
    const { activationToken } = req.body;

    if (!activationToken) {
        return next(new ErrorHandler("No token provided", 400));
    }

    try {
        // Verify the activation token
        const newUser = jwt.verify(activationToken, process.env.ACTIVATION_SECRET);

        const { name, email, password, avatar } = newUser;

        // Create the user in the database
        const user = await User.create({ name, email, password, avatar });

        // Send token for authentication
        sendToken(user, 200, res);
    } catch (error) {
        console.error(error);
        return next(new ErrorHandler("Invalid or expired token", 400));
    }
}));

module.exports = router;
