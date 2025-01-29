const express = require('express');
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const { pupload } = require('../middleware/multer');

// Create a new product
const validateProductsData = (data) => {
    const errors = [];
console.log(data);
    if (!data.description) errors.push("Please enter the product description!");
    if (!data.category) errors.push("Please enter the product category!");
    if (!data.price || isNaN(data.price) || data.price <= 0) errors.push("Please enter the product's valid  price!");
    if (!data.stock || isNaN(data.stock) || data.stock <= 0) errors.push("Please enter the product stock!");
    if (!data.email) errors.push("Please enter a valid email address!");
    return errors;

};

router.post('/create-product', pupload.array('image', 10), async (req, res, next) => {
    const { name, description, category, tags, price, stock, email } = req.body;

    // Store image paths
    const images = req.files.map((file) => file.path);

    // Assuming `validateProduct` is a function that checks required fields
    const validationErrors = validateProductsData({ name, description, category, tags,price, stock, email });   

    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    if (images.length === 0) {
        return res.status(400).json({ errors: ["Please upload product images!"] });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ errors: ["User not found!"] });
        }

        // Create new product
        const newProduct = new Product({ 
            name, 
            description, 
            category, 
            tags, 
            price, 
            stock, 
            email, 
            images, 
            user: user._id 
        });

        await newProduct.save();

        res.status(201).json({ 
            message: "Product created successfully!", 
            product: newProduct 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error!" });
    }
});


module.exports = router;
