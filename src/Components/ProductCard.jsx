// src/Components/ProductCard.jsx
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
      </div>
    </div>
  );
}

export default ProductCard;
