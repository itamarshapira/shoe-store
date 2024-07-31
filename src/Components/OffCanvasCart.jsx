// src/Components/OffCanvasCart.jsx
import "./OffCanvasCart.css";
import React from "react"; // Import React
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap"; // Import components from Reactstrap
import { useNavigate } from "react-router-dom"; // Import useNavigate - that help us to deliver data into the new page PaymentPAge

//props that we get from Home page
const OffCanvasCart = ({
  isOpen, // for reactstrap
  toggle, // for reactstrap
  cart, // Cart object from Home.jsx that represent an OBJ with key:value
  productInf,
  handleRemoveProduct, // Function to handle item removal
  clearCart, // Receive clearCart function as a prop
}) => {
  // Initialize useNavigate:
  const navigate = useNavigate();

  // Function to handle payment button click using navigate:
  const handlePayment = () => {
    //clearCart();
    navigate("/payment", { state: { cart, productInf } }); // Redirect to /payment with cart data
  };

  // Filter method to get items in the cart - creating new array , only cart with the id that we filter
  const cartItems = productInf.filter((product) => cart[product.id]);

  // Function to calculate the total price per product
  const getTotalPricePerProduct = (price, quantity) =>
    (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

  // Function to calculate the total price of the cart.
  const getTotalCartPrice = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += parseFloat(
        getTotalPricePerProduct(product.price, cart[product.id]) // call to the func above to calculate per product
      );
    });
    return total.toFixed(2);
  };

  return (
    <Offcanvas isOpen={isOpen} toggle={toggle} className="Offcanvas w-50">
      <OffcanvasHeader toggle={toggle}>Cart</OffcanvasHeader>
      <OffcanvasBody>
        {/* running on cartItems if there is an items inside start: */}
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((product) => (
              // start each  product :
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
                    {/* cart[product.id] is the Quantity  */}
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <i className="fa fa-minus-square" aria-hidden="true"></i>
                  </button>
                </div>
              </div> // end each product
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
