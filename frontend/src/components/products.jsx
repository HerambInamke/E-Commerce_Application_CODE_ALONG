export default function Product({ name, image, description, price }) {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-200 bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300 rounded-xl"></div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold text-blue-900">{name}</h2>
                <p className="text-sm text-blue-700 opacity-80 line-clamp-2">{description}</p>
            </div>
            <div className="text-lg font-bold my-4 text-blue-800">${price}</div>
            <button className="w-full text-white px-4 py-2 rounded-lg bg-blue-600 transition-transform duration-300 hover:scale-105 hover:bg-blue-700 shadow-md">
                More Info!
            </button>
        </div>
    );
}
