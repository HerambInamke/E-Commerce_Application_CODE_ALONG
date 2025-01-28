import { useState, useEffect } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
    const [image, setImage] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [email, setEmail] = useState("");

    const categoriesData = [
        { title: "Electronics" },
        { title: "Fashion" },
        { title: "Books" },
        { title: "Home Appliances" }
    ]

    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setImage((previewImages) => previewImages.concat(files));
        const imagePreviews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages((prevPreviews) => prevPreviews.concat(imagePreviews));
    }

    useEffect(() => {
        return () => {
            previewImages.forEach((e) => URL.revokeObjectURL(e))

        }
    }, [previewImages])

    const handleSubmit = (e) => {
        e.preventDefault()
        const productData = {
            name: name,
            description: description,
            category: category,
            tags: tags,
            price: price,
            stock: stock,
            email: email,
            image: image,
        }
        console.log("Product data", productData);
        alert("Product created successfully")

        setImage([])
        setPreviewImages([])
        setName('')
        setDescription('')
        setCategory('')
        setTags('')
        setPrice('')
        setStock('')
        setEmail('')

    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300">
            <div className="w-[90%] max-w-[700px] bg-white shadow-md rounded-3xl p-10 mx-auto my-8 transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
                <h5 className="mb-8 text-center text-3xl font-semibold text-indigo-500 hover:text-indigo-600 transition-colors duration-500">
                    Create Product
                </h5>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Fields */}
                    <div className="space-y-2 group">
                        <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                hover:border-indigo-400 transition-all duration-300
                                bg-white text-gray-800 placeholder-gray-400"
                            required
                        />
                    </div>
    
                    {/* Name Input */}
                    <div className="space-y-2 group">
                        <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                hover:border-indigo-400 transition-all duration-300
                                bg-white text-gray-800 placeholder-gray-400"
                            required
                        />
                    </div>
    
                    {/* Description */}
                    <div className="space-y-2 group">
                        <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter product description"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                hover:border-indigo-400 transition-all duration-300
                                bg-white text-gray-800 placeholder-gray-400 resize-none"
                            required
                        />
                    </div>
    
                    {/* Category */}
                    <div className="space-y-2 group">
                        <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                hover:border-indigo-400 transition-all duration-300
                                bg-white text-gray-800"
                            required
                        >
                            <option value="" disabled>
                                Choose a Category
                            </option>
                            {categoriesData.map((i) => (
                                <option value={i.title} key={i.title} className="bg-white">
                                    {i.title}
                                </option>
                            ))}
                        </select>
                    </div>
    
                    {/* Tags */}
                    <div className="space-y-2 group">
                        <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            Tags <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Enter product tags"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                hover:border-indigo-400 transition-all duration-300
                                bg-white text-gray-800 placeholder-gray-400"
                            required
                        />
                    </div>
    
                    {/* Price and Stock */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                            <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                Price <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                    hover:border-indigo-400 transition-all duration-300
                                    bg-white text-gray-800 placeholder-gray-400"
                                required
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                Stock <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                placeholder="Enter stock"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                                    hover:border-indigo-400 transition-all duration-300
                                    bg-white text-gray-800 placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>
    
                    {/* Upload Images */}
                    <div className="space-y-2 group">
                        <label className="block text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            Upload Images <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="file"
                            id="upload"
                            className="hidden"
                            onChange={handleImagesChange}
                            multiple
                            required
                        />
                        <label
                            htmlFor="upload"
                            className="block w-full text-center p-4 border-2 border-dashed border-gray-400 
                                rounded-lg cursor-pointer bg-white hover:bg-gray-100
                                transition-all duration-300 group hover:scale-[1.02]"
                        >
                            <AiOutlinePlusCircle
                                size={30}
                                className="mx-auto text-indigo-500 group-hover:text-indigo-600 mb-2 transform group-hover:rotate-90 transition-transform duration-500"
                            />
                            <span className="text-indigo-500 group-hover:text-indigo-600 font-medium">
                                Upload Images
                            </span>
                        </label>
                    </div>
    
                    <button
                        type="submit"
                        className="w-full p-4 mt-8 text-white text-lg font-semibold
                            bg-gradient-to-r from-indigo-400 to-indigo-600
                            rounded-lg shadow-md hover:shadow-lg
                            transform hover:scale-[1.02]
                            transition-all duration-300
                            focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
    
};

export default CreateProduct;