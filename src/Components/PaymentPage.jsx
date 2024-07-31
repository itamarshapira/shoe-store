import React from "react";
import { useLocation } from "react-router-dom"; // to Retrieve from OffCanvasCart the contuens of navigate
import ReservationForm from "./ReservasionForm";
import "./PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  // Retrieve cart and productInf from state from OffCanvasCart.
  const { cart, productInf, clearCart } = location.state || {
    cart: {},
    productInf: [],
    clearCart,
  };

  // Filter method to get items in the cart - creating new array named: cartItems , only cart with the id that we filter
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
    <div className="container PaymentPage">
      <h1>Payment Page</h1>
      {/* running on cartItems if there is an items inside start: */}
      {cartItems.length > 0 ? (
        // start all products:(Product inf)
        <div className="Product inf">
          {cartItems.map(
            (
              product // start each  product:
            ) => (
              <div
                key={product.id}
                className=" product-item d-flex align-items-center mb-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div>
                  <h5>{product.name}</h5>
                  <p>Quantity: {cart[product.id]}</p>
                  <p>Price: {product.price}</p>
                  <p>
                    Total: $
                    {getTotalPricePerProduct(product.price, cart[product.id])}
                  </p>
                </div>
              </div>
              // finish each product
            )
          )}

          <div className="mt-3">
            <h5>Total Cart Price: ${getTotalCartPrice()}</h5>
          </div>
        </div> // finish products inf
      ) : (
        <p>Your cart is empty.</p>
      )}
      {/* Pass the total cart price here */}
      <ReservationForm
        totalCartPrice={parseFloat(getTotalCartPrice())}
        isCartEmpty={cartItems.length === 0}
        cartItems={cartItems} // Pass cartItems to ReservationForm
        clearCart={clearCart} // Pass the clearCart function to ReservationForm
        cart={cart}
      />
    </div> //PaymentPage - finish.
  );
};

export default PaymentPage;
