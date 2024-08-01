import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="fotter" className=" text-white pt-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h4>About Us</h4> <hr />
            <p>
              We are a team of passionate developers dedicated to creating
              amazing web experiences.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h4>Quick Links</h4> <hr />
            <ul className="list-unstyled">
              <li>
                <a href="#open" className="text-white">
                  Home
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h4>Contact Us</h4> <hr />
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Sapir Collage
              </li>
              <li>
                <i className="fas fa-phone"></i> (123) 456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i> itamarshapirait@gmail.com
              </li>
              <li>
                <i className="fas fa-envelope"></i> ofir.rodity@gmail.com
              </li>
            </ul>
            <div className="mt-3">
              <a
                href="https://github.com/itamarshapira/shoe-store.git"
                className="text-white me-2"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/itamar-shapira-921a72279/"
                className="text-white"
              >
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
