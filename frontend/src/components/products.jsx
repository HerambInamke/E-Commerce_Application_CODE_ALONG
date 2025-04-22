//eslint-disable-next-line
import {React, useState, useEffect} from 'react';
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

export default function Product({ _id, name, images, description, price }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (!images || images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    console.log(images);

    const currentImage = images.length > 0 ? images[currentIndex] : null;
    console.log(currentImage);
    return (
        <div className="group bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow-lg flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={`http://localhost:8000${currentImage}`}
                    alt={name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-1 flex-col gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {description}
                    </p>
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-gray-900">
                    ${price.toFixed(2)}
                </div>
            </div>

            {/* Button */}
            <button
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => { navigate(`/product/${_id}`) }}
            >
                More Info
            </button>
        </div>
    );
};



Product.propTypes = {
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
}