import React , {useEffect,useState} from 'react';
import Product from '../components/products';

export default function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/api/v2/product/get-products')
        .then((res) =>{
            if(!res.ok){
                throw new Error(`Network response was not ok': ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{
            console.log(data);
            setProducts(data.products);
            setLoading(false);
        })
        .catch((err) =>{
            console.error("❌ Error fetching products", err);
            setError(err.message);
            setLoading(false);
        });
    },[]);

    if(loading){
        return  <div className='text-center text-white mt-10'>Loading...</div>;
    }
    if(error){
        return  <div className='text-center text-red-500 mt-10'>Error: {error}</div>;
    }
    return (
        <div className='w-full min-h-screen bg-gray-800 p-6'>
            <h1 className='text-3xl text-center text-white py-6'>Product List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {products.map((product) => (
                    <Product key={product._id} {...product} />
                ))}
                
            </div>
        </div>
    );
    }
