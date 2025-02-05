const express = require('express');
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const { pupload } = require('../multer');

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
    const image = req.files.map((file) => {
        return `/products/${file.filename}`;
    });
    // Assuming `validateProduct` is a function that checks required fields
    const validationErrors = validateProductsData({ name, description, category, tags,price, stock, email });   

    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    if (image.length === 0) {
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
            image, 
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

router.get('/get-products', async (req, res, next) => {
    try {
        const products = await Product.find();
        const productsWithFullImageURL = products.map((product) => {
            if(product.image && product.image.length > 0) {
                product.image = product.image.map((imagePath) => {
                    return imagePath;
                });
            }
            return product;
        });
        res.status(200).json({ products: productsWithFullImageURL });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error!,could not fetch the products" });
    }
});


module.exports = router;
