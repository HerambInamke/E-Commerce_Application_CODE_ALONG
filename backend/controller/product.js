const express = require('express');
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const { pupload } = require('../middleware/multer');

// Create a new product
const validateProductsData = (data) => {
    const errors = [];

    if (!dataata.name) errors.push("Please enter the product name!");
    if (!data.description) errors.push("Please enter the product description!");
    if (!data.category) errors.push("Please enter the product category!");
    if (!data.price || isNaN(data.price) || data.price <= 0) errors.push("Please enter the product's valid  price!");
    if (!data.stock || isNaN(data.price) || data.price <= 0) errors.push("Please enter the product stock!");
    if (!data.email) errors.push("Please enter a valid email address!");
    return errors;

};

router.post('/create-product', puploadProducts.array('images', 10), async (req, res, next) => {
    const { name, description, category, tags, price, stock, email } = req.body;

    const images = req.files.map((file) => file.path);

    const ValidatationErrors = ValidatationErrors({ name, description, category, tags });
    if (ValidationErrors.length > 0) {
        return res.status(400).json({ errors: ValidationErrors });
    }
    if (images.length === 0) {
        return res.status(400).json({ errors: ["Please upload product images!"] });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ errors: ["User not found!"] });
        }
        const newProduct = new Product({ name, description, category, tags, price, stock,email, images, user: user._id });
        await NewProduct.save();
        res.status(201).json({ message: "Product created successfully!",
            product: newProduct
         });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error!" });
    }
});

module.exports = router;
