//eslint-disable-next-line
import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import propTypes from 'prop-types'
import axios from 'axios';

export default function MyProduct({ _id, name, images, description, price}){

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if(!images || images.length === 0) return;
        const interval = setInterval (() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    const currentimages = images.length > 0 ?images[currentIndex]: null;

    const handleEdit = () => {
        navigate(`/create-product/${_id}`);
    }

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/v2/product/delete-product/${_id}`
            );
            if (response.status === 200) {
                alert("Product deleted successfully! 🗣️🔊🔥");
                window.location.reload();
            }
        } catch (err) {
            console.error("Error deleting product 😤😡🤬:", err.response?.data || err.message);
            alert("Failed to delete the product ☹️😞😓");
        }
    };

    return (
        <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="w-full">
                <img 
                src={`http://localhost:8000${currentimages}`}
                alt={name}
                className="w-full h-56 object-cover rounded-lg mb-2"/>

                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm opacity-50 line-clamp-2">{description}</p>

            </div>

            <div className="w-full">
                <p className="text-lg font-bold my-2">${price.toFixed(2)}</p>
                <button className="w-full text-white font-bold px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition mb-2"
                onClick={handleEdit}>
                Edit
                </button>

                <button className="w-full text-white font-bold px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
                onClick={handleDelete} >
                    Delete
                </button>
            </div>
        </div>
    );
}

MyProduct.propTypes = {
    name: propTypes.string.isRequired,
    images: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    _id: propTypes.string.isRequired
}