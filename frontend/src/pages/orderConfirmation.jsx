import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addressId, email } = location.state || {};

    const [selectedAddress, setSelectedAddress] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!addressId || !email) {
            navigate('/select-address');
            return;
        }

        const fetchData = async () => {
            try {
                const addressResponse = await axios.get('http://localhost:8000/api/v2/user/profile', {
                    params: { email }
                });

                if (addressResponse.status !== 200) {
                    throw new Error(`Failed to fetch addresses. Status: ${addressResponse.status}`);
                }

                const addressData = addressResponse.data;
                const address = addressData.addresses.find(addr => addr._id === addressId);
                if (!address) {
                    throw new Error('Selected address not found.');
                }
                setSelectedAddress(address);

                const cartResponse = await axios.get('http://localhost:8000/api/v2/product/cartproducts', {
                    params: { email }
                });

                if (cartResponse.status !== 200) {
                    throw new Error(`Failed to fetch cart products. Status: ${cartResponse.status}`);
                }

                const cartData = cartResponse.data;
                const processedCartItems = cartData.cart.map(item => ({
                    _id: item.productId._id,
                    name: item.productId.name,
                    price: item.productId.price,
                    images: item.productId.image.map(imagePath => `http://localhost:8000${imagePath}`),
                    quantity: item.quantity,
                }));
                setCartItems(processedCartItems);

                const total = processedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                setTotalPrice(total);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data", err);
                setError(err.response?.data?.message || err.message || "An unexpected error occurred.");
                setLoading(false);
            }
        };

        fetchData();
    }, [addressId, email, navigate]);

    const handlePlaceOrder = async () => {
        try {
            const orderItems = cartItems.map(item => ({
                product: item._id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                image: item.images && item.images.length > 0 
                    ? item.images[0] 
                    : '/default-avatar.png'
            }));
    
            const payload = {
                email,
                shippingAddress: selectedAddress,
                orderItems
            };
    
            const response = await axios.post(
                'http://localhost:8000/api/v2/orders/place-order',
                payload
            );
    
            console.log('Orders placed successfully', response.data);
            navigate('/order-success');
        } catch (error) {
            console.error('Error placing the orders: ', error);
        }
    };
    

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <p className="text-red-600 text-lg mb-4">Error: {error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Nav />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                            Order Confirmation
                        </h2>

                        {/* Shipping Address */}
                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Shipping Address
                            </h3>
                            {selectedAddress && (
                                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                    <p className="font-medium text-gray-800">
                                        {selectedAddress.address1}
                                        {selectedAddress.address2 && `, ${selectedAddress.address2}`}
                                    </p>
                                    <p className="text-gray-600">
                                        {selectedAddress.city}, {selectedAddress.country}, {selectedAddress.zipCode}
                                    </p>
                                    <p className="text-gray-500 mt-1">
                                        Type: {selectedAddress.addressType || 'N/A'}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Cart Items */}
                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Cart Items
                            </h3>
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item._id} 
                                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <div>
                                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold text-blue-600">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Total Price */}
                        <div className="mb-8 flex justify-end">
                            <p className="text-2xl font-semibold text-blue-600">
                                Total: ${totalPrice.toFixed(2)}
                            </p>
                        </div>

                        {/* Payment Method */}
                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Payment Method
                            </h3>
                            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                <p className="text-gray-800">Cash on Delivery</p>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={handlePlaceOrder}
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold
                                    hover:bg-blue-700 transform hover:scale-105
                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;