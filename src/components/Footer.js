import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Link to="#">Subscribe</Link>
          <Link to="#">Contact us</Link>
        </Row>
        <Row className="text-center">
          <p></p>
          <p>
            &copy; {new Date().getFullYear()} LittleLuvSitters. All rights
            reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
