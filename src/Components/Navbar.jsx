// src/Components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Navbar({ toggleOffCanvas }) {
  return (
    <nav id="nav" className=" fixed top-0 left-0 w-100 z-999">
      <a
        className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="/"
        title="Home"
      >
        <div className="logo">לְך👠לָך</div>
      </a>
      <div className="tc pb2">
        <a
          className="link dim black f6 f4-ns dib mr3"
          href="#open"
          title="Home"
        >
          Home
        </a>
        <a
          className="link dim black f6 f4-ns dib mr3"
          href="#fotter"
          title="Contact"
        >
          Contact us
        </a>
        {/* Basket cart */}
        <button
          className="cart  animate__animated animate__zoomInUp animate__delay-2s	2s  "
          title="Shop"
          onClick={toggleOffCanvas}
        >
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
