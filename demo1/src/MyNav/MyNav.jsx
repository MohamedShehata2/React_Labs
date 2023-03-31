import { Component } from "react";
import "./MyNav.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export class MyNav extends Component {
  //class name should be captialized

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Electronics Shop</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Products">Products</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
