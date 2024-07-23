// src/Components/ProductCard.jsx
import "./ProductCard.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";

function ProductCard(props) {
  // getting the props form app.js (this is the product inf)
  //, to use the props we do {props.name} or what ever
  return (
    <div className="ProductCard tc   dib br3 pa3 ma2 grow bw2">
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "150px", height: "120px" }}
      />
      <div className=" ">
        <h2>{props.name}</h2>
        <p>{props.text}</p>
        <p>{props.price}</p>
        {/* onClick that happening when we click the btn add to cart 
        onAddToCart is the func that we send as a prop that made cahnges in the cart */}
        <button className="btn btn-primary" onClick={props.onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard; // This is the way to export componenta!
