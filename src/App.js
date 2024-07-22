// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import OpenImg from './Components/OpenImg';
import ProductCard from './Components/ProductCard';
import { productInf } from './productInf'; // extarnal js file with data of shoes (productInf)

function App() {

  // use state for cart:
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
  <div className="App ">
      <div className="flex flex-wrap justify-center">
      <Navbar />
      <OpenImg />
      
      <div className="animate__animated animate__fadeInDown animate__delay-3s	3s animate__slow	2s flex-wrap justify-center">
        {productInf.map((product) => ( // kind of for each to run over the shoes data
          <ProductCard // what inside is our props:
            key={product.id} // key is always id
            name={product.name}
            text={product.text}
            price={product.price}
            image={product.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
     {/* Display the cart count */}
     <div className="cart-count">
        <p>Items in Cart: {cartCount}</p>
      </div>

  </div> // end app div
    
  );
}

export default App;
