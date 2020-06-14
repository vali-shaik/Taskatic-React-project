import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import {
  NavDropdown,
  Form,
  FormControl,
  Button,
  Navbar,
  Nav,
  Modal,
} from "react-bootstrap";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

          <Button
            variant="outline-light"
            onClick={handleShow}
            className="LoginButton"
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Header;
