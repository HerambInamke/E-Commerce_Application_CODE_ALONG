//eslint-disable-next-line
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import { Home,Login,SignupPage,CreateProduct,MyProducts,Cart } from './Routes/route.js';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/create-product' element={<CreateProduct/>} />
        <Route path='/myproducts' element={<MyProducts/>} />
        <Route path='/product/:id' element={<CreateProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
