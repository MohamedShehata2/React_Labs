import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class MyNav extends Component {
  render() {
    return (
        <Navbar bg="dark" className="navbar-dark"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hossam Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Shows</Nav.Link>
              <Nav.Link href="#link">Sales</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Values</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
