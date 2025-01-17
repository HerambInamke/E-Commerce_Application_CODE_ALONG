const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose'); // Add Mongoose for MongoDB connection
const app = express();
const port = 8000;

// Enable CORS if needed (if frontend and backend are on different ports)
app.use(cors());

// Body parsing middleware for form data
app.use(express.json());  // For JSON data
app.use(express.urlencoded({ extended: true }));  // For form-encoded data

// File upload setup using multer
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
const mongoURI = 'mongodb+srv://heramb:inamke@cluster0.wycsh.mongodb.net/test?retryWrites=true&w=majority&tls=true'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅Database connection successful"))
  .catch((err) => console.error("❌Database connection error:", err));

// Define the route for user creation
app.post('/api/v2/user/create-user', upload.single('file'), (req, res) => {
  console.log("Received request with body:", req.body);
  console.log("File data:", req.file);
  res.status(200).send("User created successfully");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
