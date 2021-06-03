import "./Resume.css";
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import ResumeBody from "../../components/Bodies/ResumeBody/ResumeBody";
import SkillsBody from "../../components/Bodies/SkillsBody/SkillsBody";
import ExpBody from "../../components/Bodies/ExpBody/ExpBody";
import EducationBody from "../../components/Bodies/EducationBody/EducationBody";
import CourseBody from "../../components/Bodies/CourseBody/CourseBody";

const Resume: React.FC = () => {
  return (
    <>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <Accordion className="resume-options">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Resume
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ResumeBody />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Technical Skills
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SkillsBody />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Experience
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ExpBody />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Education
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <EducationBody />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Relevant Coursework
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <CourseBody />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </ul>
    </>
  );
};

export default Resume;
