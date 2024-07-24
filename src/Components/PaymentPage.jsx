import React from "react";
import { useLocation } from "react-router-dom";
import ReservationForm from "./ReservasionForm";

const PaymentPage = () => {
  const location = useLocation();
  // Retrieve cart and productInf from state from OffCanvasCart.
  const { cart, productInf } = location.state || { cart: {}, productInf: [] };
  const cartItems = productInf.filter((product) => cart[product.id]);

  const getTotalPricePerProduct = (price, quantity) =>
    (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

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
    <div className="PaymentPage">
      <h1>Payment Page</h1>
      {cartItems.length > 0 ? (
        <div className="Product inf">
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
                <div className="mt-3">
                  <h5>Total Cart Price: ${getTotalCartPrice()}</h5>
                </div>
              </div>
            </div>
          ))}
        </div> //ProductInf - finish.
      ) : (
        <p>Your cart is empty.</p>
      )}
      {/* Pass the total cart price here */}
      <ReservationForm
        totalCartPrice={parseFloat(getTotalCartPrice())}
        isCartEmpty={cartItems.length === 0}
      />
    </div> //PaymentPage - finish.
  );
};

export default PaymentPage;
