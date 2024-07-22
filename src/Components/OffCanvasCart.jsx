// src/Components/OffCanvasCart.jsx
import React from "react"; // Import React
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap"; // Import components from Reactstrap

// Functional component for the off-canvas cart
const OffCanvasCart = ({ isOpen, toggle, cart, productInf }) => {
  // Filter the products that are in the cart based on the cart state
  const cartItems = productInf.filter((product) => cart[product.id]);

  // Function to calculate the total price for a product
  const getTotalPrice = (price, quantity) =>
    (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

  return (
    // Offcanvas component from Reactstrap, with isOpen and toggle props for visibility
    <Offcanvas isOpen={isOpen} toggle={toggle} className="w-50">
      {/* Header of the off-canvas cart with a toggle button */}
      <OffcanvasHeader toggle={toggle}>Cart</OffcanvasHeader>
      <OffcanvasBody>
        {/* Check if there are items in the cart */}
        {cartItems.length > 0 ? (
          <div>
            {/* Map over the cart items to display each product */}
            {cartItems.map((product) => (
              <div key={product.id} className="d-flex align-items-center mb-3">
                {/* Product image with fixed width */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "auto", marginRight: "10px" }}
                />
                <div>
                  {/* Product name */}
                  <h5>{product.name}</h5>
                  {/* Quantity of the product in the cart */}
                  <p>Quantity: {cart[product.id]}</p>
                  {/* Product price */}
                  <p>Price: {product.price}</p>
                  {/* Total price for the product */}
                  <p>
                    Total: ${getTotalPrice(product.price, cart[product.id])}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Message when the cart is empty
          <p>Your cart is empty.</p>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default OffCanvasCart; // Export the OffCanvasCart component
