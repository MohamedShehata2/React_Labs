import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class MyFooter extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark " variant="dark">
          <Container className="">
            <Navbar.Brand href="#home"className="">Please don't hesitate to conduct us for any details ^_^</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#About"></Nav.Link>
              <Nav.Link href="#Products"></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
