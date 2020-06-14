import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  NavDropdown,
  Form,
  FormControl,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
const Header = () => {
  return (
    <div className="Header">
      <Navbar bg="primary" variant="dark" expand="lg            ">
        <Navbar.Brand href="#home">Taskatic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/open recent">
                Recent Project
              </NavDropdown.Item>
              <NavDropdown.Item href="/createNewProject">
                Create new
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/all-projects">View All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Link to="/">
            <Button variant="outline-light" className="LogoutButton">
              Log out
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
