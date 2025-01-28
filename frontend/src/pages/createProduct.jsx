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

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100;
                if (isVisible) {
                    element.classList.add('animate-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
            <div className="w-[90%] max-w-[700px] bg-white shadow-2xl rounded-3xl p-10 mx-auto my-8 transform transition-all duration-300 hover:shadow-3xl">
                <h5 className="mb-8 text-center text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Create Product
                </h5>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Fields */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            hover:border-blue-300 transition-all duration-300
                            bg-gray-50 hover:bg-white"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            hover:border-blue-300 transition-all duration-300
                            bg-gray-50 hover:bg-white"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Description <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter product description"
                            rows="5"
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            hover:border-blue-300 transition-all duration-300
                            bg-gray-50 hover:bg-white resize-none"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Category <span className="text-rose-500">*</span>
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            hover:border-blue-300 transition-all duration-300
                            bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                            required
                        >
                            <option value="" disabled>Choose a Category</option>
                            {categoriesData.map((i) => (
                                <option value={i.title} key={i.title}>
                                    {i.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Tags <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Enter product tags"
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            hover:border-blue-300 transition-all duration-300
                            bg-gray-50 hover:bg-white"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Price <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                                className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                hover:border-blue-300 transition-all duration-300
                                bg-gray-50 hover:bg-white"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Stock <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                placeholder="Enter stock"
                                className="w-full p-3 border border-gray-200 rounded-xl shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                hover:border-blue-300 transition-all duration-300
                                bg-gray-50 hover:bg-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Images <span className="text-rose-500">*</span>
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
                            className="block w-full text-center p-4 border-2 border-dashed border-blue-300 
                            rounded-xl cursor-pointer bg-blue-50 hover:bg-blue-100 
                            transition-all duration-300 group"
                        >
                            <AiOutlinePlusCircle size={30} className="mx-auto text-blue-500 group-hover:text-blue-600 mb-2" />
                            <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                                Upload Images
                            </span>
                        </label>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {previewImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg shadow-md 
                                    hover:shadow-lg transition-all duration-300 hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-4 mt-8 text-white text-lg font-semibold
                        bg-gradient-to-r from-blue-600 to-purple-600
                        rounded-xl shadow-lg hover:shadow-2xl
                        transform hover:-translate-y-0.5
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;