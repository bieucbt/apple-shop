import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import {Routes, Route} from 'react-router-dom'
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/shopping-cart' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
