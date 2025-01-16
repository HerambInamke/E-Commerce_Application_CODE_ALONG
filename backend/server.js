// server.js (or app.js)
const express = require('express');
const cors = require('cors');
const multer = require('multer'); // File upload handling
const app = express();
const port = 8000;

// Enable CORS if needed (if frontend and backend are on different ports)
app.use(cors());

// Body parsing middleware for form data (if not using file uploads)
app.use(express.json());  // For JSON data
app.use(express.urlencoded({ extended: true }));  // For form-encoded data

// File upload setup using multer
const upload = multer({ dest: 'uploads/' }); // You can customize the 'dest' folder

// Define the route for user creation
app.post('/api/v2/user/create-user', upload.single('file'), (req, res) => {
  // Log incoming request data to verify it's reaching the server
  console.log("Received request with body:", req.body);  // Form fields (name, email, etc.)
  console.log("File data:", req.file);  // File (avatar) data

  // Handle user creation logic here
  res.status(200).send("User created successfully");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
