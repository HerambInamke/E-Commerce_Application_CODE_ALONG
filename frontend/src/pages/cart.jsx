import { useState, useEffect } from "react";
import CartProducts from "../components/cartProduct";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    if (!email) return; // Don't make the API call if email is not available
    
    fetch(`http://localhost:8000/api/v2/product/cartproducts?email=${email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })  
      .then((data) => {
        console.log("Cart API response:", data);
        if (data.cart && Array.isArray(data.cart)) {
          setProducts(data.cart.map(product => ({
            quantity: product.quantity,
            ...product.productId
          })));
        } else {
          setProducts([]); // Ensure it's always an array
        }
      })
      .catch((err) => {
        console.error("Error fetching cart products:", err);
        setError(err.message);
      });
  }, [email]); // Add email to dependency array

    const handlePlaceOrder = () => {
      navigate('/select-address');
    }

  return (
    <>
      <Nav />
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full md:w-4/5 lg:w-4/6 2xl:w-2/3 h-full border-l border-r border-neutral-300 flex flex-col">
          <div className="w-full md:w-4/5 lg:w-4/6">
            <h1 className="text-2xl font-semibold text-gray-900 px-4 py-2">CART</h1>
          </div>

          <div className="w-full flex-grow overflow-auto px-3 py-2 gap-y-2">
            {error ? (
              <div className="text-red-500 text-center">{error}</div>
            ) : products.length > 0 ? (
              products.map((product) => <CartProducts key={product._id} {...product} />)
            ) : (
              <div className="text-gray-500 text-center py-5">Your cart is empty.</div>
            )}
          </div>

          <div className='w-full p-4 flex justify-end'>
              <button
                    onClick={handlePlaceOrder}
                    className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'>
                                  Place Order
                    </button>
              </div>

        </div>
      </div>
    </>
  );
};

export default Cart;