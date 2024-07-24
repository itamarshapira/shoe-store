// src/Components/OffCanvasCart.jsx
import React from "react"; // Import React
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap"; // Import components from Reactstrap
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OffCanvasCart = ({
  isOpen, // for reactstrap
  toggle, // for reactstrap
  cart, // Cart object
  productInf,
  handleRemoveProduct, // Function to handle item removal
}) => {
// Initialize useNavigate
  const navigate = useNavigate();

  // Function to handle payment button click
  const handlePayment = () => {
    navigate('/payment', { state: { cart, productInf } }); // Redirect to /payment with cart data
  };

  // Filter method to get items in the cart
  const cartItems = productInf.filter((product) => cart[product.id]);

  // Function to calculate the total price per product
  const getTotalPricePerProduct = (price, quantity) =>
    (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

  // Function to calculate the total price of the cart.
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
    <Offcanvas isOpen={isOpen} toggle={toggle} className="w-50">
      <OffcanvasHeader toggle={toggle}>Cart</OffcanvasHeader>
      <OffcanvasBody>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((product) => (
              <div key={product.id} className="d-flex align-items-center mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "auto", marginRight: "10px" }}
                />
                <div>
                  <h5>{product.name}</h5>
                  <p>Quantity: {cart[product.id]}</p>
                  <p>Price: {product.price}</p>
                  <p>
                    Total: $
                    {getTotalPricePerProduct(product.price, cart[product.id])}
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <i className="fa fa-minus-square" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-3">
              <h5>Total Cart Price: ${getTotalCartPrice()}</h5>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePayment} // Call handlePayment on click
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default OffCanvasCart;
