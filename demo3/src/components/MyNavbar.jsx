import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class MyNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <i className="bi bi-award fs-2 me-3" style={{ color: "gold" }}></i>
            <NavLink className="navbar-brand" to="/product">
              Products
            </NavLink>
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/product/0/edit">
                Add Product
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
