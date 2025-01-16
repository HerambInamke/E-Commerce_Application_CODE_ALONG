const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    try {
        // Configure the SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.example.com",
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_PORT == 465, // Use SSL for port 465
            auth: {
                user: process.env.SMTP_EMAIL || "your-email@example.com",
                pass: process.env.SMTP_PASSWORD || "your-email-password",
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.SMTP_FROM || `"Your App" <${process.env.SMTP_EMAIL}>`, // Sender address
            to: options.email, // Recipient
            subject: options.subject, // Email subject
            text: options.message, // Plain text version of the message
            html: options.html || undefined, // HTML version of the message (if provided)
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email:", error.message);
        return { success: false, error: error.message };
    }
};

module.exports = sendMail;
