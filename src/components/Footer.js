import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container className="format">
        <Row className="text-center">
          <Link to="#">Subscribe</Link>
          {"Subscribe"}
          <Link to="#">Contact us</Link>
          {"Contact Us"}
        </Row>
        <Row className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
