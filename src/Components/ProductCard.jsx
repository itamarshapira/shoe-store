// src/Components/ProductCard.jsx
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";

function ProductCard(props) {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2">
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "150px", height: "120px" }}
      />
      <div>
        <h2>{props.name}</h2>
        <p>{props.text}</p>
        <p>{props.price}</p>
        <button className="btn btn-primary" onClick={props.onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard; // this is the way to export componenta!
