//eslint-disable-next-line
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import { Home,Login } from './Routes/route.js';
import {SignupPage,CreateProduct,} from './Routes/route.js';
import MyProducts from './pages/myProduct.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/product' element={<CreateProduct />} />
        <Route path='/my-products' element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
