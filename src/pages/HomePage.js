import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import teilzeit from "../Images/babysitter/babysitter-teilzeit-662x331.jpg";

function HomePage() {
  return (
    <Container>
      <Row>
        <h1>Welcome to LittleLuvSitters</h1>
        <Image src={teilzeit} alt="playing blocks" />
      </Row>
      <Row>
        <h3>Our Quality & Experience</h3>
        <p>
          Since 2010, we have been providing child care as a service to our
          residents and neighbors who need a babysitter in the short term. No
          more searching and commuting. You can find services quickly and
          conveniently, close to home.
        </p>
        <p>
          If you are looking for a job and are experienced in babysitting, look
          no further. Families in our residential complex would welcome your
          services.
        </p>
      </Row>
      <Row>
        <Link to="/babysitterServices">
          <Button>Find Babysitters Now</Button>
        </Link>
      </Row>
    </Container>
  );
}

export default HomePage;
