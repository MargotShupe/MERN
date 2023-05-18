import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to="/">
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/projects">
            Projects
            {/*<NavLink to="/projects">Projects</NavLink> */}
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to="/admin/users">
              Users
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="/account">
            Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

//collapseOnSelect es un atributo de boostrap que me permite hacer cambios
//cuando expander el menu y cuando no, en este caso el menos se va expander con
//pantallas grandes(lg)
//For phone app we will use a toggle
//I have to comment line 14 because because it was creating an anchor tag
//have to render it as a navlink to not affect the other style
