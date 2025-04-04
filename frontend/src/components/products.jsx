import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Product({ _id, name, image, description, price }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!image || image.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % image.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [image]);
    console.log(image, image[currentIndex])
    const currentImage = image && image.length > 0 ? image[currentIndex] : null;
    const imageUrl = currentImage ? `http://localhost:8000${currentImage}` : 'https://via.placeholder.com/400';

    return (
        <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image Container with Overlay */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                    {name}
                </h2>
                <p className="mt-3 text-gray-600 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">
                    {description}
                </p>
                
                {/* Price Tag */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        ${price.toFixed(2)}
                    </span>
                </div>

                {/* Button */}
                <button
                    onClick={() => navigate(`/productDetails/${_id}`)}
                    className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold
                        transform transition-all duration-300
                        hover:bg-blue-700 hover:shadow-lg
                        active:scale-95
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    View Details
                </button>
            </div>

            {/* Image Indicators */}
            {image && image.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {image.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                    ? 'bg-blue-600 w-4' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};