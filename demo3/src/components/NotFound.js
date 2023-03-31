import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "700px" }}>
      <Row className="justify-content-md-center">
        <Col md="auto" className="text-center alert alert-danger">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button href="/" variant="dark">
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
