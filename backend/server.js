const userrouter = require('./controller/user');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose'); // Add Mongoose for MongoDB connection
const app = express();
const port = 8000;
const product = require("./controller/product");
const user = require("./controller/user");
const path =require('path');

app.use(cors());
app.use("/api/v2/user", user);
app.use("/api/v2/product", product);
app.use('/products',express.static(path.join(__dirname, 'products')));

// Enable CORS if needed (if frontend and backend are on different ports)
// Body parsing middleware for form data
app.use(express.json());  // For JSON data
app.use(express.urlencoded({ extended: true }));  // For form-encoded data
app.use(userrouter); // For
// File upload setup using multer
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
const mongoURI = 'mongodb+srv://heramb:inamke@cluster0.wycsh.mongodb.net/test?retryWrites=true&w=majority&tls=true'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅Database connection successful"))
  .catch((err) => console.error("❌Database connection error:", err));


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
