const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: [true, "Please provide the description of the product"]
        },
        category:{
            type: String,
            required: [true, "Please provide the product category"]
        },
        tags:{
            type: [String],
            default:[],
        },
        price:{
            type: Number,
            required: [true, "Please provide product price"]
        },
        stock:{
            type: Number,
            required: [true, "Please provide the product stock"]
        },
        images:{
            type: [String],
            required: [true, "Please provide some product images"]
        },
        email:{
            type: String,
            required: [true, "Please provide an email"],
            match:[/.+@.+\..+/, "Please provide a valid email"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);