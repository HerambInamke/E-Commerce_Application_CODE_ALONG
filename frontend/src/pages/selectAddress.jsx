import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

const SelectAddress = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const userEmail = "coco@gmail.com"; // This should come from your auth context/state

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v2/user/profile?email=${userEmail}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAddresses(data.addresses || []);
            } catch (err) {
                console.error('Error fetching addresses:', err);
                setError(err.message || 'An unexpected error occurred.');
            } finally {
                setLoading(false);
            }
        };
        fetchAddresses();
    }, [userEmail]);

    const handleSelectAddress = (addressId) => {
        navigate('/order-confirmation', { 
            state: { 
                addressId, 
                email: userEmail 
            }
        });
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
                            Select Shipping Address
                        </h2>
                        
                        {addresses.length > 0 ? (
                            <div className="space-y-4">
                                {addresses.map((address) => (
                                    <div
                                        key={address._id}
                                        className="border border-gray-200 p-4 rounded-lg hover:border-blue-200 transition-colors"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {address.address1}
                                                    {address.address2 && `, ${address.address2}`}
                                                </p>
                                                <p className="text-gray-600 mt-1">
                                                    {address.city}, {address.country}, {address.zipCode}
                                                </p>
                                                <p className="text-gray-500 mt-1">
                                                    Type: {address.addressType || 'N/A'}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleSelectAddress(address._id)}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold
                                                    hover:bg-blue-700 transform hover:scale-105
                                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            >
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-600 text-lg">No addresses found.</p>
                                <button
                                    onClick={() => navigate('/create-address')}
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold
                                        hover:bg-blue-700 transform hover:scale-105
                                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Add New Address
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectAddress;