// src/App.jsx
import React, { useState } from 'react'; // Import React and useState hook from React
import './App.css'; // Import custom styles from App.css
import Navbar from './Components/Navbar'; // Import Navbar component
import OpenImg from './Components/OpenImg'; // Import OpenImg component
import ProductCard from './Components/ProductCard'; // Import ProductCard component
import OffCanvasCart from './Components/OffCanvasCart'; // Import OffCanvasCart component
import { productInf } from './productInf'; // Import product data

function App() {
  // State to manage the cart, initially an empty object
  const [cart, setCart] = useState({});
  
  // State to manage the visibility of the OffCanvasCart, initially false (closed)
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Function to handle adding products to the cart
  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      // Create a copy of the previous cart state
      const newCart = { ...prevCart };
      // If the product already exists in the cart, increment its quantity
      if (newCart[productId]) {
        newCart[productId] += 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        newCart[productId] = 1;
      }
      return newCart; // Return the updated cart state
    });
  };

  // Function to toggle the OffCanvasCart visibility
  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen); // Toggle the state
  };

  return (
    <div className="App">
      {/* Container for Navbar and other elements */}
      <div className="flex flex-wrap justify-center">
        {/* Navbar component with the toggleOffCanvas function passed as a prop */}
        <Navbar toggleOffCanvas={toggleOffCanvas} />
        
        {/* OpenImg component */}
        <OpenImg />
        
        {/* Container for ProductCard components */}
        <div className="card-container animate__animated animate__fadeInDown animate__delay-3s animate__slow">
          {/* Map over productInf array and create a ProductCard for each product */}
          {productInf.map((product) => (
            <ProductCard
              key={product.id} // Unique key for each ProductCard
              name={product.name} // Product name
              text={product.text} // Product description or text
              price={product.price} // Product price
              image={product.image} // Product image URL
              onAddToCart={() => handleAddToCart(product.id)} // Pass handleAddToCart with product ID
            />
          ))}
        </div>
      </div>
      
      {/* Cart count section (currently commented out) */}
      {/* <div className="cart-count">
        <p>Items in Cart: {cartCount}</p>
      </div> */}
      
      {/* OffCanvasCart component with state and props for cart and toggle function */}
      <OffCanvasCart 
        isOpen={isOffCanvasOpen} // Whether the cart is open or not
        toggle={toggleOffCanvas} // Function to toggle cart visibility
        cart={cart} // Cart items and quantities
        productInf={productInf} // Product data to display in the cart
      />
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
