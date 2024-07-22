// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import OpenImg from './Components/OpenImg';
import ProductCard from './Components/ProductCard';
import OffCanvasCart from './Components/OffCanvasCart'; // Import the OffCanvasCart component
import { productInf } from './productInf'; // import the procudt data file

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
    <div className="App ">
      <div className="flex flex-wrap justify-center">
        <Navbar toggleOffCanvas={toggleOffCanvas} /> {/* Pass toggleOffCanvas to Navbar */}
        <OpenImg />
      
        <div className=" card-container  animate__animated animate__fadeInDown animate__delay-3s animate__slow flex-wrap justify-center">
          {productInf.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              text={product.text}
              price={product.price}
              image={product.image}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="cart-count">
        <p>Items in Cart: {cartCount}</p>
      </div>
      <OffCanvasCart isOpen={isOffCanvasOpen} toggle={toggleOffCanvas} /> {/* Include OffCanvasCart */}
    </div>
  );
}

export default App;
