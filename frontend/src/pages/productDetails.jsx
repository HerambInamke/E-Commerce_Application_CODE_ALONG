//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const email = "dummy@gmail.com";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v2/product/product/${id}`);
                setProduct(response.data.product);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const addToCart = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v2/product/cart",
                {
                    userId: email,
                    productId: id,
                    quantity: quantity,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            alert("Product added to cart successfully!");
            console.log("Added to cart:", response.data);
        } catch (err) {
            console.error("Error adding to cart:", err.response?.data && err.message);
            alert("Failed to add product to cart. Please try again.");
        }
    };

    if (loading) return <div className="text-center text-gray-700 mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">Error: {error.message}</div>;
    if (!product) return <div className="flex justify-center items-center h-screen text-gray-500 text-xl">Product not found</div>;

    return (
        <>
            <Nav />
            <div className="container mx-auto p-6">
                <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-start select-none">
                        {/* Image section */}
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            {product.images && product.images.length > 0 ? (
                                <img
                                    src={`http://localhost:8000${product.images[0]}`}
                                    alt={product.name}
                                    className="w-full h-auto object-cover rounded-lg"
                                    style={{ maxHeight: "500px" }}
                                />
                            ) : (
                                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                                    No Image Available
                                </div>
                            )}
                        </div>

                        {/* Information section */}
                        <div className="w-full md:w-1/2 lg:w-2/3 p-6">
                            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">{product.name}</h1>

                            <div className="mt-4">
                                <h2 className="text-lg font-medium text-gray-700">Description</h2>
                                <p className="text-gray-600">{product.description}</p>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-lg font-medium text-gray-700">Category</h2>
                                <p className="text-gray-600">{product.category}</p>
                            </div>

                            {product.tags && product.tags.length > 0 && (
                                <div className="mt-4">
                                    <h2 className="text-lg font-medium text-gray-700">Tags</h2>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {product.tags.map((tag, index) => (
                                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-6">
                                {/* Price Section */}
                                <div>
                                    <h2 className="text-lg font-medium text-gray-700">Price</h2>
                                    <p className="text-xl font-semibold text-gray-800">${product.price}</p>
                                </div>

                                {/* Quantity Section */}
                                <div>
                                    <h2 className="text-lg font-medium text-gray-700">Quantity</h2>
                                    <div className="flex items-center gap-x-3 mt-2">
                                        <button onClick={handleIncrement} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg">
                                            <IoIosAdd />
                                        </button>
                                        <span className="px-6 py-2 bg-gray-100 rounded-lg">{quantity}</span>
                                        <button onClick={handleDecrement} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg">
                                            <IoIosRemove />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="mt-6">
                                <button
                                    className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition-transform transform hover:-translate-y-1 active:translate-y-0"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
