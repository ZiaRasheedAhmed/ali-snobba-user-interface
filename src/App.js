import logo from './logo.svg';
import './App.css';
import ProductList from './Conponents/Pages/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './Conponents/Pages/ProductDetail';
import Cart from './Conponents/Pages/Cart';
import Checkout from './Conponents/Pages/Checkout';
import React, { useEffect, useState, useCallback } from 'react';

function App() {
  return (
<>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProductList/>} path='/'></Route>
          <Route element={<ProductDetail/>} path='/productdetails/:productID'></Route>
          <Route element={<Cart/>} path='/productcart'></Route>
          <Route element={<Checkout/>} path='/checkout'></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
