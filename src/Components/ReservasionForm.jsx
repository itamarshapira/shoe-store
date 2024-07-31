import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./ReservationForm.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// ReservationForm component that takes in totalCartPrice and isCartEmpty as props form PaymentPage
const ReservationForm = ({
  totalCartPrice,
  isCartEmpty,
  cartItems,
  setCart,
  cart,
}) => {
  // useRef hooks to create references for form fields
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const deliveryRef = useRef("");

  // useState hook to manage the total price state that start from totalCartPrice that came from the PaymentPage
  const [totalPrice, setTotalPrice] = useState(totalCartPrice);

  // State for success message and order ID
  const [successMessage, setSuccessMessage] = useState("");
  const [orderId, setOrderId] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission status

  // const clearCart = () => {
  //   setCart({});
  // };

  const navigate = useNavigate(); // Initialize useNavigate

  // useEffect(() => {
  //   if (isSubmitted) {
  //     setCart({});
  //   }
  // }, [isSubmitted]);

  // The useEffect hook takes two arguments:
  // 1. A function that contains the side effect code.
  // 2. An array of dependencies. The side effect runs when these dependencies change. Here, totalCartPrice is the dependency.
  useEffect(() => {
    // Defines a function to handle changes in the delivery option.
    // Calculates the delivery fee based on the selected delivery option and updates the total price.
    const handleDeliveryChange = () => {
      // Checks if the selected delivery option is "3 days" and sets the delivery fee to $10, otherwise sets it to $0.
      const deliveryFee = deliveryRef.current?.value === "3 days" ? 10 : 0;
      // Updates the totalPrice state with the new total price, including the delivery fee.
      setTotalPrice(totalCartPrice + deliveryFee);
    };

    handleDeliveryChange(); // Initial calculation when the component mounts.

    const deliveryElement = deliveryRef.current; // Stores the current reference to the delivery select element.

    if (deliveryElement) {
      // Adds an event listener to the delivery select element to handle changes.
      deliveryElement.addEventListener("change", handleDeliveryChange);
    }

    // Cleanup function that runs when the component unmounts or before re-running the effect:
    // Removes the event listener from the delivery select element to prevent memory leaks.
    return () => {
      if (deliveryElement) {
        deliveryElement.removeEventListener("change", handleDeliveryChange);
      }
    };
  }, [totalCartPrice]); // The effect runs whenever totalCartPrice changes.

  const handleSubmit = (e) => {
    console.log("Form submitted"); // Debug statement
    console.log("before clean : ", cart); // Debug statement
    //console.log("befor clean : " + cart[0].name);
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      delivery: deliveryRef.current.value,
      totalPrice: totalPrice,
      cartItems: cartItems.map((item) => ({
        productName: item.name,
        quantity: item.quantity, // Adjusted to use item.quantity instead of cartItems[item.id]
        price: item.price,
      })),
    };
    console.log("FormData:", formData); // Debug statement

    // POST request to server
    fetch("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Send the registration details in the request body
        // !important! the name of the fields came from the POST in the SERVER SIDE !
        first_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        delivery: formData.delivery,
        totalPrice: formData.totalPrice,
        cartItems: formData.cartItems,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setOrderId(data.orderId); // Set the order ID from the response (server side)
        setSuccessMessage("Order placed successfully!"); // Set the success message (sever side)

        setIsSubmitted(true); // Set the form submission status to true

        //clearCart();
        console.log("after clean : ", cart); // Debug statement
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <Container className="head my-5">
      <h2>Reservation Form</h2>
      {successMessage && ( // the alert messege with the mongo _id , only be rendering after succesful submit! until that its empty string wich count as false !
        <Alert variant="success">
          {successMessage} Your order ID is {orderId}.
        </Alert>
      )}
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
        {/* Conditional Rendering: for the Return to Home Page:
            The "Return to Home Page" button is rendered only when isSubmitted is true using {isSubmitted && ( ... )}.
            This means the button is not part of the initial render and will only appear after the form has been submitted successfully. */}
        {isSubmitted && (
          <div className="text-center mt-3 animate__animated  animate__tada animate__slow	2s; ">
            <Button
              variant="outline-success"
              onClick={() => navigate("/")}
              className="return-button"
            >
              Return to Home Page
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default ReservationForm;
