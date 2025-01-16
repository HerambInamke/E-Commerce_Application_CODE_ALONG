const sendToken = (user, statusCode, res) => {
    // Generate JWT token
    const token = user.getJWTToken();

    // Set cookie expiration in days (default: 90 days)
    const cookieExpireDays = process.env.COOKIE_EXPIRE || 90;

    // Cookie options
    const options = {
        expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000), // Convert days to milliseconds
        httpOnly: true, // Cookie accessible only by HTTP(S)
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // Strict in production, lax otherwise
    };

    // Remove sensitive data from the user object
    const sanitizedUser = { ...user._doc };
    delete sanitizedUser.password;

    // Send response with token and sanitized user data
    res.status(statusCode)
        .cookie("token", token, options)
        .json({
            success: true,
            token,
            user: sanitizedUser,
        });
};

module.exports = sendToken;
