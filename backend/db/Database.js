const mongoose = require('mongoose');

const connectDatabase = () => {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://heramb:inamke@cluster0.wycsh.mongodb.net/test?retryWrites=true&w=majority&tls=true';

    if (!mongoURI) {
        console.error("❌ MONGODB_URI is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        })
        .then((data) => {
            console.log(`✅ Database connected successfully: ${data.connection.host}`);
        })
        .catch((err) => {
            console.error("❌ Database connection failed:", err.message);
            process.exit(1);
        });

    mongoose.connection.on('error', (err) => {
        console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.warn('⚠️ MongoDB disconnected');
    });

    process.on('SIGINT', async () => {
        try {
            await mongoose.connection.close();
            console.log('✅ MongoDB connection closed through app termination');
            process.exit(0);
        } catch (err) {
            console.error('❌ Error closing MongoDB connection:', err);
            process.exit(1);
        }
    });
};

module.exports = connectDatabase;