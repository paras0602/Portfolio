import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiGithub,
  SiNpm,
  SiVercel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Vs-code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Post Man</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
        <h5>NPM</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h5>Netlify</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h5>Vercel</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
