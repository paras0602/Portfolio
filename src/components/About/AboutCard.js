import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paras Jain </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am an aspiring full stack web developer with experience in effective collaboration and a keen interest in solving problems and coming up with effective solutions. With a good understanding of Data Structures and Algorithms, proficiency in React, and with a stronghold on MERN stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Paras Jain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
