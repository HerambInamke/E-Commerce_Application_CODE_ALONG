import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { 
  Home,
  LoginPage,
  SignupPage,
  CreateProduct,
  Cart,
  ProductDetails,
  Profile,
  CreateAddress,
  SelectAddress,
  OrderConfirmation,
  MyOrdersPage
} from './Routes/route.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<CreateProduct />} />
        {/* <Route path="/myproducts" element={<MyProducts />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-address" element={<CreateAddress />} />
        <Route path="/select-address" element={<SelectAddress />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path='/myorders' element={<MyOrdersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;