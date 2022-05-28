import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithub,
  DiCss3,
  DiHtml5,
  Di
  
} from "react-icons/di";
import redux from "../../Assets/redux.svg"
import express from "../../Assets/expressjs-icon.svg"

import {
  SiRedux,
  SiMaterialui,
  SiExpress,
  SiTypescript,
} from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>Mongodb</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h5>CSS-3</h5>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5>Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h5>Express.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <h5>Material-UI</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5>Typescript</h5>
      </Col>

      
      
    </Row>
  );
}

export default Techstack;
