import React from "react";
import "./IntroductionDashboard.css";
import { Card } from "react-bootstrap";
const IntroductionDashboard = () => {
  return (
    <div>
      <Card className="IntroductionCard">
        <Card.Body>
          <Card.Title className="CardTitleText">Introduction</Card.Title>
          <Card.Header className="CardHeader"></Card.Header>
          <Card.Subtitle className="mb-2 text-muted CardTitleText">
            Welcome to Taskatic !!
          </Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, falli laudem imperdiet in mel, qui omnis
            reque constituam eu. Et vel facilisis inciderint, nibh explicari ei
            qui.
          </Card.Text>
          <Card.Link href="#" className="HyperLink">
            Taskatic User's Guide{" "}
          </Card.Link>
          <Card.Link href="#" className="HyperLink">
            know more..
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default IntroductionDashboard;
