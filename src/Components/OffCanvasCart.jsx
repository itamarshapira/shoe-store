// src/Components/OffCanvasCart.jsx
import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

const OffCanvasCart = ({ isOpen, toggle }) => {
  return (
    <div>
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>Cart</OffcanvasHeader>
        <OffcanvasBody>{/* Content will go here */}</OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default OffCanvasCart;
