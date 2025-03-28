const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const productRoutes = require('./controller/product');
const userRoutes = require('./controller/user');
const errorHandler = require('./middleware/error');
const orders = require('./controller/order');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Static files
app.use('/products', express.static(path.join(__dirname, 'products')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/v2/orders",orders);
// Routes
app.use('/api/v2/user', userRoutes);

app.use('/api/v2/product', productRoutes);

// Error handling
app.use(errorHandler);

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://heramb:coco1501@cluster0.wycsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Database connection successful"))
.catch((err) => console.error("❌ Database connection error:", err));

// Health check route
app.get('/', (_req, res) => {
  res.send("Welcome to backend");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

module.exports = app;