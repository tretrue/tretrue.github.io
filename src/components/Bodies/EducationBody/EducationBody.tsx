import React from "react";
import "./EducationBody.css";
import Card from "react-bootstrap/Card";

const EducationBody: React.FC = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>University of Missouri - Columbia</Card.Title>
        <Card.Header>Attended: August 2017 - May 2021</Card.Header>
        <Card.Text>
          <dl>
            <dd> Bachelor of Science in Computer Science</dd>
            <dd>
              Dean's High Honor Roll Spring 2019, Fall 2019, Spring 2020, Fall
              2020, Spring 2021
            </dd>
          </dl>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationBody;
