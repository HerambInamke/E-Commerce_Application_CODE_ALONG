const express = require('express');
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const { pupload } = require('../multer');
const mongoose = require('mongoose');
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

router.post('/create-product', pupload.array('images', 10), async (req, res, next) => {
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


router.get('/my-products', async (req, res, next) => {
    const {email} = req.query;
    try {
        const products = await Product.find({ email });
        res.status(200).json({ products: products });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error!,could not fetch the products" });
    }
}
);

router.get('/product/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found!" });
        }
        res.status(200).json({ product });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error!,could not fetch the product" });
    }
});

router.put('/update-product/:id', pupload.array('images', 10), async (req, res) => {
    const { id } = req.params;
    const { name, description, category, tags, price, stock, email } = req.body;

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ error: "Product not found!" });
        }

        let updatedImages = existingProduct.images;
        if (req.files && req.files.length > 0) {
            updatedImages = req.files.map((file) => `/products/${path.basename(file.filename)}`);
        }

        const validationErrors = validateInputs({ name, description, category, tags, price, stock, email });
        if (validationErrors.length > 0) {
            return res.status(400).json({ errors: validationErrors });
        }

        // Update product fields
        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.category = category;
        existingProduct.tags = tags;
        existingProduct.price = price;
        existingProduct.stock = stock;
        existingProduct.email = email;
        existingProduct.images = updatedImages;

        await existingProduct.save();

        res.status(200).json({
            message: "✅ Product updated successfully!",
            product: existingProduct,
        });

    } catch (error) {
        console.error("Server error!", error);
        res.status(500).json({ error: "Server error!" });
    }
});
router.delete('/delete-product/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
        const existingProduct= await Product.findById(id);
        if(!existingProduct) {
            return res.status(404).json({ error: "Product not found!" });
            }
            await existingProduct.deleteOne();
            res.status(200).json({
                message: "✅✅Product deleted successfully!",
            });
        }catch(error){
            console.error('Server error!',error);
            res.status(500).json({ error: "Server error!" });
            }
        });


        router.post('/cart', async (req, res) => {
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
    router.put('/cartproduct/quantity',async (req,res)=>{
        const {email,productId,quantity}=req.body;
        console.log("Updated cart product")
    
        if(!email || !productId || quantity===undefined){
            return res.status(400).json({error: "Email and other stuff required"})
        }
    
        try{
            const user=await User.findOne({email})
    
            if(!user){
                return res.status(404).json({error: "User not found"})
            }
            const cartProduct=await User.findOne(item=>item.productId.toString===productId)
    
            if(!cartProduct){
                return res.status(404).json({error: "Product not found"})
            }
    
            cartProduct.quantity=quantity
            await User.save()
    
            res.status(200).json({
                message: "Suceessssss"
            })
        }catch(err){
            console.error(err)
            res.status(500)
        }
    
    
    })
});

module.exports = router;
