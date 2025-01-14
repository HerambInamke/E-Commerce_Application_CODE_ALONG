const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true, // Ensures TLS is used
    });

    console.log(`Database connected: ${connection.connection.host}`);
  } catch (err) {
    console.error(`Database connection failed: ${err.message}`);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDatabase;
