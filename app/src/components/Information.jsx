import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Information = () => {
  return (
    <Container className="information">
      <Row>
        <Col lg="6" className="fs-7 px-3 font weight bold">
          <p>
            <span>
              Over the past decade, i was lucky enough to travel all over and
              have the opportunity to take photos in some of the most beautiful
              places on the planet. Photography was just a substitute for
              something to do when i wasn't able to surf. This portfolio is just
              a few of my favorites from over the years and my first attempt at
              a website.
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Information;
