import React from "react";
import "./ProjectTabs.css";
import { Nav, Tab, Row } from "react-bootstrap";
import RidsiDescription from "./RidsiDescription/RidsiDescription";
import EventsDescription from "./EventsDescription/EventsDescription";
import AugurDescription from "./AugurDescription/AugurDescription";

const ProjectTabs: React.FC = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="ridsi">
        <Row className="projects-tabs">
          <Nav variant="tabs" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="ridsi">RIDSI</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="events">
                Missouri Bicentennial Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="augur">Augur</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Tab.Content>
          <Tab.Pane eventKey="ridsi">
            <RidsiDescription />
          </Tab.Pane>
          <Tab.Pane eventKey="events">
            <EventsDescription />
          </Tab.Pane>
          <Tab.Pane eventKey="augur">
            <AugurDescription />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
export default ProjectTabs;
