import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Subtitle>
          {props.subheading}
        </Card.Subtitle>
        <br></br>
        <Card.Subtitle>
          {props.subheading1}
        </Card.Subtitle>
        <br></br>
        <Card.Subtitle>
          {props.subheading2}
        </Card.Subtitle>
        <br></br>
        <Card.Subtitle>
          {props.subheading3}
        </Card.Subtitle>
        <br></br>
        <Card.Subtitle>
          {props.description1}
        </Card.Subtitle>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
