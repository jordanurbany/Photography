import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container className="hero-section-container">
      <Row className="h-100">
        <Col
          xs
          md="8"
          className="d-flex flex-column justify-content-center text-start px-4"
        >
          <div className="mx-4">
            <h1>Jordan Urbany Photography</h1>
            <p>
              This website is a portfolio of photos ive take throughout the last
              ten years of traveling
            </p>
          </div>
          <div className="btns-wrapper">
            <a href="/">My Story</a>
            <button variant="secondary">Learn More</button>
          </div>
        </Col>
        <Col xs md="4">
          <div className="img-wrapper"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
