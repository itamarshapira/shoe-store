// src/Components/OffCanvasCart.jsx
import React from "react"; // Import React
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap"; // Import components from Reactstrap

const OffCanvasCart = ({
  // What the func get is the PROPS that we send from App.js!!
  isOpen, // for reactstrap
  toggle, // for reactstrap
  cart, // ** cart object: Holds the current state of the cart with product IDs as keys and quantities as values.
  productInf,
  handleRemoveProduct, // func that handle remove item
}) => {
  // filter method: Creates a new array (cartItems) by
  // including only those products from productInf whose IDs exist as keys in the cart object.
  const cartItems = productInf.filter((product) => cart[product.id]);

  // Function to calculate the total price per product
  const getTotalPricePerProduct = (price, quantity) =>
    (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

  //Function to caculate the total price of the cart.
  const getTotalCartPrice = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += parseFloat(
        getTotalPricePerProduct(product.price, cart[product.id])
      );
    });
    return total.toFixed(2);
  };

  return (
    // Offcanvas component from Reactstrap, with isOpen and toggle props for visibility
    <Offcanvas isOpen={isOpen} toggle={toggle} className="w-50 ">
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
                    Total: $
                    {getTotalPricePerProduct(product.price, cart[product.id])}
                    {/*getTotalPrice=+getTotalPricePerProduct */}
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(product.id)} // Call remove function with product ID
                  >
                    Remove Product
                  </button>
                </div>
              </div>
            ))}
            {/* Display total price of the cart */}
            <div className="mt-3">
              <h5>Total Cart Price: ${getTotalCartPrice()}</h5>
            </div>
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
