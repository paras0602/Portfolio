import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sephora from "../../Assets/Projects/sephora.png";
import tata from "../../Assets/Projects/tataclick.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tata}
              isBlog={false}
              title="TATA Cliq"
              description="Tata-Cliq is an E-commerce web application to provides a wide"
              subheading="Features"
              subheading1="● Social Sign-in/Sign-up"
              subheading2="● Responsive for all Screens"
              subheading3="● Payment Gateway"
              description1="● OTP Authentication"
              link="https://github.com/paras0602/Tata-Cliq"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephora}
              isBlog={false}
              title="Sephora.nnow"
              description="Sephora is a French multinational retailer of personal care and beauty products.Along with its own private label, Sephora Collection, Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color, beauty tools, body lotions and haircare."
              link="https://github.com/paras0602/Sephora-nnnow.com-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
