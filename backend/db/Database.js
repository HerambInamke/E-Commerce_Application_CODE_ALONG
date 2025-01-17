if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/.env" });
}

const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        if (!process.env.DB_URL) {
            throw new Error("DB_URL is not defined in environment variables.");
        }

        const connection = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Database connected successfully: ${connection.connection.host}");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDatabase;
