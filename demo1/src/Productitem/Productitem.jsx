import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";


export default class Productitem extends Component {
cardTitle = "Laptop";
btnTitle = "Buy Now! ";

  render() {
    const { myProduct} = this.props ;
    console.log(myProduct);
    return (
      <div className="col-sm-6 col-lg-4">
        <Card>
          <Card.Img variant="top" src="/Images/lap1.jpg" />
          <Card.Body>
            <Card.Title>{myProduct.productName}</Card.Title> 

            {/* //this.props.myProduct.productName */}

            <Card.Text>Price : {myProduct.price}</Card.Text>
            <Card.Text>Quantity : {myProduct.quantity || 0 }</Card.Text>
            <Button variant="primary">{this.btnTitle}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
