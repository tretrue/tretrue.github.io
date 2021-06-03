import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import GHicon from "../../assets/GitHub-Mark-32px.png";
import LIicon from "../../assets/LI-In-Bug.png";

const Menu: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Robert Lincoln Truesdale III</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>About Me</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link>Resume/Skills</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Links" id="collasible-nav-dropdown">
            <NavDropdown.Item href="https://github.com/tretrue">
              <div className="link-item">
                <img height={25} width={25} alt="GH-ICON" src={GHicon} />
                <h4>&nbsp;: tretrue</h4>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.linkedin.com/in/tretrue/">
              <div className="link-item">
                <img height={25} width={25} alt="LI-ICON" src={LIicon} />
                <h4>&nbsp;: tretrue</h4>
              </div>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="mailto:rltruesdale3@gmail.com">
            rltruesdale3@gmail.com
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
