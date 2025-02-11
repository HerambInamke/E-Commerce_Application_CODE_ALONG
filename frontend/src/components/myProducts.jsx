import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MyProduct({ _id, name, image, description, price }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!image || image.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % image.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [image]);

    const currentImage = image.length > 0 ? image[currentIndex] : null;

    const handleEdit = () => {
        navigate(`/create-product/${_id}`);
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/v2/product/delete-product/${_id}`
            );
            if (response.status === 200) {
                alert("Product Deleted Successfully");
                navigate("/");
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while deleting the product");
        }
    };

    return (
        <div className="group bg-white border border-gray-200 p-5 rounded-xl shadow-md flex flex-col gap-4 transition-all duration-300 hover:shadow-lg">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                    src={currentImage ? `http://localhost:8000${currentImage}` : "/placeholder.jpg"}
                    alt={name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                />
            </div>
    
            {/* Content Container */}
            <div className="flex flex-1 flex-col gap-2">
                <h2 className="text-lg font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                    {name}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {description}
                </p>
    
                {/* Price & CTA */}
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</span>
                </div>
            </div>
    
            {/* Buttons */}
            <div className="flex gap-2 mt-3">
                <button
                    className="flex-1 text-sm font-medium text-white py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition duration-300"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="flex-1 text-sm font-medium text-white py-2 rounded-lg bg-red-600 hover:bg-red-500 transition duration-300"
                >
                    Delete
                </button>
            </div>
        </div>
    );
    
}

MyProduct.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
