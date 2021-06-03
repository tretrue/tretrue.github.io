import React from "react";
import "./ExpBody.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const ExpBody: React.FC = () => {
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>
              University of Missouri - Columbia, Research Assistant
            </Card.Title>
            <Card.Header>October 2018 - May 2019</Card.Header>
            <Card.Body>
              <dl>
                <dd>
                  - Worked with a team of other developers to implement
                  OpenSource Soft  ware metric definitions into a working example
                  called Augur
                </dd>
                <dd>
                  - Learned Vue.js, Flask, and Python to develop both frontend
                  and backend features
                </dd>
              </dl>
            </Card.Body>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Digital Ally Inc., Intern Web Developer</Card.Title>
            <Card.Header>May 2019 - August 2019</Card.Header>
            <Card.Body>
              <dl>
                <dd>
                  - Used Node.js full-stack to develop and test a new soft  ware
                  (dubbed EVO) and interface to be used nationwide by police
                  force to record and capture incidents
                </dd>
                <dd>
                  - Learned Node.js to test the new soft  ware and product
                  hardware
                </dd>
                <dd>
                  - Redesigned frontend navigational menu for web application
                </dd>
              </dl>
            </Card.Body>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              Streamline Inc., Intern Web Application Developer
            </Card.Title>
            <Card.Header>August 2020 - May 2021</Card.Header>
            <Card.Body>
              <dl>
                <dd>
                  - Worked with a team of intern developers to develop an events
                  mobile hybrid web application, with multiple variations to
                  suit diff  erent clients
                </dd>
                <dd>
                  - Utilized Angular 6 and Ionic 6 written with TypeScript to
                  develop and deploy diff  erent variations
                </dd>
              </dl>
            </Card.Body>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
};

export default ExpBody;
