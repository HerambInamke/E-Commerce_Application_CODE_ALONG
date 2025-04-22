const express = require("express");
const router =  require.Router();
const Order = require('../model/order');
const User = require('../model/user');

router.post('/place-order', async (req, res)=>{
    try{
        const{ email, orderItems, shippingAddress} = req.body;

        //Validate request data
        if(!email){
            return res.status(400).json({ error: "Email is required" });
        }
        if(!orderItems || !Array.isArray(orderItems) || orderItems.length === 0){
            return res.status(400).json({message: 'Order items are required.'});
        }
        if(!shippingAddress){
            return res.status(400).json({message: 'Shipping address is required'});
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message: 'User not found.'});
        }
        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new Order({
                user: user._id,
                orderItems: [item],
                shippingAddress,
                totalAmount
            });
            return order.save();
        })
        const orders = await Promise.all(orderPromises);   
        
        //Clear user's cart after placing the order.
        await Cart.deleteMany({user: user._id });
        res.status(201).json({message:'Order placed successfully'})

    }catch(err){
        console.error("Error placing order:", err);
        res.status(500).json({message: err.message});
    }
});