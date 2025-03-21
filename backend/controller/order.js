const express = require('express');
const router = express.Router();
const Order = require('../model/order');
const User = require('../model/user');
const Cart = require('../model/cart'); // Ensure this exists
// const router = express.Router();

router.post('/place-order', async (req, res) => {
    try {
        const { email, orderItems, shippingAddress } = req.body;

        // Validate email
        if (!email) {
            return res.status(400).json({ message: "Please provide a valid email address" });
        }

        // Validate order items
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ message: "Order items required" });
        }

        // Validate shipping address
        if (!shippingAddress) {
            return res.status(400).json({ message: "Shipping address required" });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create orders for each item
        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new Order({
                user: user._id,
                orderItems: [item],
                shippingAddress,
                totalAmount: totalAmount
            });
            return await order.save();
        });

        await Promise.all(orderPromises);

        // Clear user cart after order
        await Cart.deleteMany({ user: user._id });

        res.status(201).json({ message: "Order created successfully",orders });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }

 router.get('/my-orders', async (req, res) => {
    try{
        const {email} = req.query;

        if(!email) {
            return res.status(400).json({message: 'Email is required'});
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const orders = await Order.find({user: user._id});
        res.status(200).json({orders});
    } catch(error) {
        console.error('Error fetching the order:', error);
        res.status(500).json({message: error.message});
    }
});
});

module.exports = router;
