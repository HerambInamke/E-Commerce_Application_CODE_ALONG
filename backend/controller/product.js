const express = require('express')
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const {pupload} = require('../multer')
const path = require('path')
const mongoose = require('mongoose');
const validateProductsData = (data) => {
    const errors = [];

    if(!data.name) errors.push("Product name is required");
    if(!data.description) errors.push("Product description is required");
    if(!data.category) errors.push("Product category is required");
    if(!data.price || isNaN(data.price) || data.price <=0) errors.push("Valid price is required");
    if(!data.stock || isNaN(data.stock) || data.stock <=0) errors.push("Valid stock is required");
    if(!data.email) errors.push("Email is required");

    return errors;
};

router.post('/create-product', pupload.array('images',10), async (req, res) => {

    const {name, description, category, tags, price, stock, email} = req.body;
    const images = req.files.map((file) => {
            return `/products/${path.basename(file.path)}`;
    });

    const validationErrors = validateProductsData({ name, description, category, price, stock, email});
    if(validationErrors.length > 0) {
        return res.status(400).json({errors: validationErrors})
    }

    if(images.length === 0) {
        return res.status(400).json({error: "Atleast one image is required"})
    }

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({error: "Email does not exist in the database"});
        }

        const newProduct = new Product({
            name,
            description,
            category,
            tags,
            price,
            stock,
            email,
            images,
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Server error. Could not create the product"});
    }
});

router.get('/get-products', async (req,res) => {
    try{
        const products = await Product.find();
                res.status(200).json({product: products});
            }
            catch(err) {
                console.error('Server error: ',err);
                res.status(500).json({error: 'Server error. Could not fetch products.'})
            }
        });

    router.get('/my-products', async (req,res) => {
        const {email} = req.query;
        try{
            const products=await Product.find({email});
            res.status(200).json({products: products});
        }
        catch(err) {
            console.error('Server error: ',err);
            res.status(500).json({error: 'Server error. Could not fetch products.'})
        }
    });

    router.get('/product/:id', async (req,res) => {
        const {id} = req.params;
        try{
            const product = await Product.findById(id);
            if(!product) {
                return res.status(404).json({error: 'Product not found'});
            }
            res.status(200).json({product});
        }
        catch(err) {
            console.error('Server error:', err);
            res.status(500).json({error: 'Server error: Could not fetch the product.'})
        }
    })

    router.put('/update-product/:id', pupload.array('images',10), async (req,res) => {
        const {id} = req.params;
        const {name, description, category,tags, price, stock, email} = req.body;

        try{
            const existingProduct = await Product.findById(id);
            if(!existingProduct) {
                return res.status(404).json({error: 'Product not found'});
            }

            let updatedImages = existingProduct.images;
            if(req.files && req.files.length>0) {
                updatedImages = req.files.map((file) => {
                    return `/products/${path.basename(file.path)}`;
                });
            }

            const ValidationErrors = validateProductsData({
                name,
                description,
                category,
                price,
                stock,
                email,
            });

            if (ValidationErrors.length>0) {
                return res.status(400).json({errors: ValidationErrors});
            }

            existingProduct.name=name;
            existingProduct.description=description;
            existingProduct.category=category;
            existingProduct.tags=tags;
            existingProduct.price=price;
            existingProduct.email=email;
            existingProduct.images=updatedImages;
            existingProduct.stock=stock;

            await existingProduct.save();

            res.status(200).json({
                message: 'Product updated successfully',
                product: existingProduct,
            });
        } catch(err) {
            console.error('Server error :',err);
            res.status(500).json({error: 'Server error. Could not update the product'})
        }
    });

    router.delete('/delete-product/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const existingProduct = await Product.findById(id);
            if (!existingProduct) {
                return res.status(404).json({ error: "Product not found" });
            }
    
            await Product.findByIdAndDelete(id); // ✅ Deletes the product
            res.status(200).json({ message: "Product deleted successfully!" });
        } catch (err) {
            console.error("Server error:", err);
            res.status(500).json({ error: "Server error. Could not delete the product" });
        }
    });
    router.post('/product/cart', async (req, res) => {
            try {
                console.log("Raw Request Body:", req.body);  // 🔍 Log req.body
        
                if (!req.body || Object.keys(req.body).length === 0) {
                    return res.status(400).json({ error: "Request body is missing or empty!" });
                }
        
                const { userId, productId, quantity } = req.body;
        
                if (!userId) {
                    return res.status(400).json({ error: "Please provide a valid userId!" });
                }
                if (!mongoose.Types.ObjectId.isValid(productId)) {
                    return res.status(400).json({ error: "Invalid productId!" });
                }
                if (!quantity || quantity < 1) {
                    return res.status(400).json({ error: "Quantity must be at least 1!" });
                }
        
                const user = await User.findOne({ email: userId });
                if (!user) {
                    return res.status(404).json({ error: "User not found!" });
                }
        
                const product = await Product.findById(productId);
                if (!product) {
                    return res.status(404).json({ error: "Product not found!" });
                }
        
                const cartItemIndex = user.cart.findIndex(
                    (item) => item.productId.toString() === productId
                );
                if (cartItemIndex > -1) {
                    user.cart[cartItemIndex].quantity += quantity;
                } else {
                    user.cart.push({ productId, quantity });
                }
                await user.save();
        
                res.status(200).json({ message: "Product added to cart successfully!", user });
        
            } catch (error) {
                console.error("Server error!", error);
                res.status(500).json({ error: "Server error!" });
            }
        });
              

    router.get('/cartproducts',async (req, res) =>{
    try{
        const {email}=req.query;
        if(!email){
            return res.status(400).json({ error: "Please provide a valid email address!" });
        }
        const user = await User.findOne({email}).populate({
            path:'cart.productId',
            model:'Product'
            });
            if(!user){
                return res.status(404).json({ error: "User not found!" });
            }
            res.status(200).json({
                message: "Cart products fetched successfully!",
                cart: user.cart
            });
    }catch(e){
        console.error('Server error!',e);
        res.status(500).json({ error: "Server error!" });
    }
        });


module.exports = router;