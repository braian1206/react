import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CardWidget from "./CardWidget";
import "../css/NavBar.css"; // CSS custom Ferrari + subrayado

const NavBar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm ferri-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="../icono.jpg"
            alt="logo"
            style={{ width: "60px", height: "auto" }}
          />
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* SPORT CARS Dropdown */}
            <NavDropdown title="SPORT CARS" id="sport-cars-dropdown">
              <NavDropdown.Item as={NavLink} to="/categories/nuevos">
                Nuevos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/ofertas">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/serie-especial">
                Serie especial
              </NavDropdown.Item>
            </NavDropdown>

            {/* RACING */}
            <Nav.Link as={NavLink} to="/categories/racing">
              RACING
            </Nav.Link>

            {/* COLECCIONES */}
            <Nav.Link as={NavLink} to="/categories/colecciones">
              COLECCIONES
            </Nav.Link>
          </Nav>

          {/* Carrito */}
          <Nav>
            <CardWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
