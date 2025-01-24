export default function Product({ name, image, description, price }) {
    return (
        <div className="bg-gradient-to-b from-white to-white/80 p-4 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-full overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-white bg-opacity-30 hover:bg-opacity-10 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold text-neutral-800">{name}</h2>
                <p className="text-sm text-neutral-600 opacity-80 line-clamp-2">{description}</p>
            </div>
            <div className="text-lg font-bold my-4 text-neutral-800">${price}</div>
            <button className="w-full text-white px-4 py-2 rounded-md bg-black transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
                More Info!
            </button>
        </div>
    );
}
