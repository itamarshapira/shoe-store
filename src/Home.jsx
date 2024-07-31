// src/App.jsx
import React, { useState } from "react"; // Import React and useState hook from React
import "./Home.css"; // Import custom styles from App.css
import Navbar from "./Components/Navbar"; // Import Navbar component
import OpenImg from "./Components/OpenImg"; // Import OpenImg component
import ProductCard from "./Components/ProductCard"; // Import ProductCard component
import OffCanvasCart from "./Components/OffCanvasCart"; // Import OffCanvasCart component
import { productInf } from "./productInf"; // Import product data
import Br from "./Components/Br";
import Footer from "./Components/Footer";

function Home() {
  //**using use state hook : named cart.
  // cart is an object that initially starts as an empty object {}. important: not an int!
  // an object in JavaScript always consists of key-value pairs
  const [cart, setCart] = useState({}); // so the cart state basically represents to us a shoe with id and amount!

  // State to manage the visibility of the OffCanvasCart, initially false (closed)
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const [notification, setNotification] = useState("");

  // Function to handle adding products to the cart
  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      // prevCart is the latest state of 'cart' when this function runs
      // Create a copy of the previous cart state
      const newCart = { ...prevCart }; // This line creates a shallow copy of the prevCart object.
      // If the product already exists in the cart, increment its quantity
      if (newCart[productId]) {
        newCart[productId] += 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        newCart[productId] = 1;
      }
      return newCart; // Return the updated cart state
    });

    setNotification("Item added to cart!");
    setTimeout(() => setNotification(""), 2000); // Clear the notification after 2 seconds
  };

  // Function to handle remove from cart that sends as a prop to OffCanvas component
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId]) {
        if (newCart[productId] > 1) {
          newCart[productId] -= 1;
        } else {
          delete newCart[productId]; // Remove the product if quantity is 1
        }
      }
      return newCart;
    });
  };

  // ! need to investigate:
  // clear the cart - we will use that func after submit the reservtiom form. (make the cart an empty obj again like the beggining)
  const clearCart = () => {
    setCart({});
  };

  // Function to toggle the OffCanvasCart visibility
  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen); // Toggle the state
  };

  return (
    <div className="Home " style={{ position: "relative", zIndex: 1 }}>
      <Br />
      {/* Container for Navbar and other elements */}
      <div className="flex flex-wrap justify-center">
        {/* Navbar component with the toggleOffCanvas function passed as a prop */}

        <Navbar toggleOffCanvas={toggleOffCanvas} />
        <div className="animate__animated animate__fadeInDown animate__delay-1s animate__slow">
          {/* OpenImg component */}
          <OpenImg />
        </div>

        {/* Display notification message */}
        {notification && <div className="notification">{notification}</div>}

        {/* Container for ProductCard components */}
        <div className="card-container animate__animated animate__fadeInDown animate__delay-3s animate__slow">
          {/* Map over productInf array and create a ProductCard for each product */}
          {productInf.map((product) => (
            <ProductCard //* props for Product Card:
              key={product.id} // Unique key for each ProductCard
              name={product.name} // Product name
              text={product.text} // Product description or text
              price={product.price} // Product price
              image={product.image} // Product image URL
              onAddToCart={() => handleAddToCart(product.id)} // Pass handleAddToCart with product ID as a prop to ProductCard component
            />
          ))}
        </div>
      </div>

      {/* //*OffCanvasCart component with state and props for cart and toggle function */}
      <OffCanvasCart
        // props for offCanvasCart:
        isOpen={isOffCanvasOpen} // Whether the cart is open or not
        toggle={toggleOffCanvas} // Function to toggle cart visibility
        cart={cart} // Cart items and quantities from the cart state hook
        productInf={productInf} // Product data to display in the cart
        handleRemoveProduct={handleRemoveFromCart} // Pass remove function as a prop
        clearCart={clearCart} // Pass the clearCart function as a prop
      />
      <Footer />
    </div>
  );
}
export default Home; // Export the Home component for use in other parts of the application
