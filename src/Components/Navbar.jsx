// src/Components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Navbar({ toggleOffCanvas }) {
  return (
    <nav className="pa3 pa1-ns fixed top-0 left-0 w-100 z-999">
      <a
        className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="#"
        title="Home"
      >
        לְך👠לָך
      </a>
      <div className="tc pb2">
        <a className="link dim black f6 f4-ns dib mr3" href="#" title="Home">
          Home
        </a>
        <a className="link dim black f6 f4-ns dib mr3" href="#" title="Contact">
          Contact
        </a>
        {/* Basket cart */}
        <a
          className="link dim black f6 f4-ns dib mr3"
          href="#"
          title="Shop"
          onClick={toggleOffCanvas}
        >
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
