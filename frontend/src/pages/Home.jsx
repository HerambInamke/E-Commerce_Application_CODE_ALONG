import Product from "../components/products";
// import product from "../components/products";

const ProductDetails = [
    {
        name: "Product 1",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 100"
    },

    {
        name: "Product 2",
        image: "data:image/jpeg;base64,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",
        description:"This is a limited-time shopping.",
        price:"$ 200"
    },

    {
        name: "Product 3",
        image: "data:image/jpeg;base64,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",
        description:"This is a limited-time shopping.",
        price:"$ 300"
    },

    {
        name: "Product 4",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 400"
    },

    {
        name: "Product 5",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 500"
    },

    {
        name: "Product 6",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 600"
    },

    {
        name: "Product 7",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 700"
    },


    {
        name: "Product 8",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 800"
    },


    {
        name: "Product 9",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 900"
    },


    {
        name: "Product 10",
        image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description:"This is a limited-time shopping.",
        price:"$ 1000"
    },
];


export default function Home(){
    return (
        <div className="w-full  min-h-screen bg-neutral-800 ">
            <div className="grid grid-cols-5 gap-4 p-4">
                {
                    ProductDetails.map((product, index) => <Product key={index}{...product}/>
                    )
                }
            </div>
        </div>

    );
}