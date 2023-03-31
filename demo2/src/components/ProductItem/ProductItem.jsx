import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProductItem.css"

export default class ProductItem extends Component {
  render() {
    const { myProducts } = this.props;
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-1">
        <Card >
        <Card.Img id="card" variant="top" src={myProducts?.imgUrl} />
        <Card.Body className="text-dark p-2 m-2">
            <Card.Title >{myProducts?.productName}</Card.Title>
            <Card.Text>{myProducts?.price}$</Card.Text>
            <Card.Text>quantity: {myProducts?.quantity || 0}</Card.Text>
            <Button variant="primary">Buy Now</Button>
        </Card.Body>
       </Card>
       </div>
    )
  }
}
