import React, { Component } from "react";
import Productitem from "../Productitem/Productitem";

export default class Products extends Component {
  ProductList = [
    {
      id: 1,
      productName: "Laptop Lenovo",
      price: "200 $",
      quantity: 20,
    },
    {
      id: 2,
      productName: "Laptop Dell",
      price: "300 $",
      quantity: 10,
    },
    {
      id: 3,
      productName: "Laptop Lenovo",
      price: "200 $",
      quantity: 20,
    },
    {
      id: 4,
      productName: "Laptop Dell",
      price: "150 $",
      quantity: 5,
    },
    {
      id: 5,
      productName: "Laptop Lenovo",
      price: "200 $",
      quantity: 20,
    },
    {
      id: 6,
      productName: "Laptop Dell",
      price: "150 $",
      quantity: 5,
    },
  ];
  render() {
    return (
      <div className=" text-center fs-2 p-5">
        <div className="container">
          <h2 className="bg-secondary text-white">Our Products</h2>
          <div className="row">
            {this.ProductList.map((item, index) => {
              return <Productitem key={item.id} myProduct={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
