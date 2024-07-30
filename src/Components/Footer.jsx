import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" text-white pt-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5> <hr />
            <p>
              We are a team of passionate developers dedicated to creating
              amazing web experiences.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5> <hr />
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5> <hr />
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> 1234 Street Name,
                City, State
              </li>
              <li>
                <i className="fas fa-phone"></i> (123) 456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i> email@example.com
              </li>
            </ul>
            <div className="mt-3">
              <a href="#" className="text-white me-2">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white me-2">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white me-2">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Itamar&Ofir | Hi-Tech military .
              All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
