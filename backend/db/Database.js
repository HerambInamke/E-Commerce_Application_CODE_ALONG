const mongoose = require('mongoose');

const connectDatabase = () => {
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((data) => {
            console.log(`✅Database connected successfully: ${data.connection.host}`);
        })
        .catch((err) => {
            console.error("❌Database connection failed:", err.message);
            process.exit(1);
        });
};

module.exports = connectDatabase;
