import React from "react";
import { Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import teilzeit from "../Images/babysitter/babysitter-teilzeit-662x331.jpg";
import Slider from "../components/Slider";

function HomePage() {
  return (
    
    <Container>
       <Row>
        <h1>Welcome to LittleLuvSitters</h1>
        <Slider />
        {/* <Image src={teilzeit} alt="playing blocks" width="80%" /> */}
      </Row>
    
      <Row>
        <h3>Our Quality & Experience</h3>
        <p>
          Since 2010, we offer babysitting services to our residents and
          neighbors in need of short term child support. No more searching and
          commuting. You can find reliable services quickly and conveniently,
          and close to home.
        </p>
        <p>
          If you are looking for a job and are experienced in looking after
          children, look no further. Families in our residential complex would
          welcome your support and services.
        </p>
      </Row>
      <Row>
        <Link to="/babysitterServices">
          <Button size="lg" variant="primary">
            Find Babysitters Now
          </Button>
        </Link>
      </Row>
    </Container>
  );
}

export default HomePage;
