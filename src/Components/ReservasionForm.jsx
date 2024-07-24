import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ReservationForm = ({ totalCartPrice, isCartEmpty }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const deliveryRef = useRef("");

  const [totalPrice, setTotalPrice] = useState(totalCartPrice);

  useEffect(() => {
    const handleDeliveryChange = () => {
      const deliveryFee = deliveryRef.current.value === "3 days" ? 10 : 0;
      setTotalPrice(totalCartPrice + deliveryFee);
    };

    handleDeliveryChange(); // Initial calculation
    deliveryRef.current.addEventListener("change", handleDeliveryChange);

    return () => {
      deliveryRef.current.removeEventListener("change", handleDeliveryChange);
    };
  }, [totalCartPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      delivery: deliveryRef.current.value,
      totalPrice: totalPrice,
    };

    // POST request to server
    fetch("http://localhost:3001/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success (e.g., show a confirmation message)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <Container className="my-5">
      <h2>Reservation Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameRef}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                ref={phoneRef}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                ref={addressRef}
                placeholder="Enter your address"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formDelivery" className="mb-3">
              <Form.Label>Delivery Option</Form.Label>
              <Form.Control as="select" ref={deliveryRef} required>
                <option value="3 days">In 3 days (+ $10)</option>
                <option value="14 days">In 14 days (Free)</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </Col>
        </Row>
        <Button variant="primary" type="submit" disabled={isCartEmpty}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReservationForm;
