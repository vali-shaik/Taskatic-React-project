import React from "react";
import "./ActivityDashboard.css";
import { Card } from "react-bootstrap";
const ActivityDashboard = () => {
  return (
    <Card className="ActivityCard">
      <Card.Body>
        <Card.Title className="CardTitleText">Activity</Card.Title>
        <Card.Header className="CardHeader"></Card.Header>
        <Card.Subtitle className="mb-2 text-muted CardTitleText">
          Todo Activities
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
  );
};
export default ActivityDashboard;
