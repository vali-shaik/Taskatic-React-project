import React from "react";
import "./ProjectsDashboard.css";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
const ProjectsDashboard = () => {
  return (
    <Card className="ProjectsCard">
      <Card.Body>
        <Card.Title className="CardTitleText">Projects</Card.Title>
        <Card.Header className="CardHeader"></Card.Header>
        <Card.Subtitle className="mb-2 text-muted CardTitleText">
          Current working projects
        </Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet, falli laudem imperdiet in mel, qui omnis
          reque constituam eu. Et vel facilisis inciderint, nibh explicari ei
          qui.
        </Card.Text>
        <Link to="/createNewProject">
          <Button className="CreateNewButton">Create new</Button>
        </Link>
        {/* <Link to="/all-projects"> */}
        <a href="/all-projects">
          <Button className="ViewAllButton" onClick="/all-projects">
            View all Projects
          </Button>
        </a>
        {/* </Link> */}
      </Card.Body>
    </Card>
  );
};
export default ProjectsDashboard;
