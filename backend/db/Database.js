// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env",
    });
}
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
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