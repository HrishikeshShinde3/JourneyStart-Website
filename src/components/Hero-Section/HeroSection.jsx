import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/JourneyStart1.jpg"
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Educate, Elevate, Empower: <br /> Empowering Technical Minds  <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
             
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-80 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
