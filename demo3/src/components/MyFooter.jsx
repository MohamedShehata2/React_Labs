import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './myFooter.css'
export default class MyFooter extends Component {
  render() {
    return (
      <div>
        <Card className="mt-5">
        <Card.Body className="d-flex justify-content-between">
          <i className="fs-3 bi bi-facebook"></i>
          <i className="fs-3 bi bi-twitter"></i>
          <i className="fs-3 bi bi-instagram"></i>
          <i className="fs-3 bi bi-linkedin"></i>
          <i className="fs-3 bi bi-github"></i>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://images.pexels.com/photos/7887815/pexels-photo-7887815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Card>
      </div>
    )
  }
}
