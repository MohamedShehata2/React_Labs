/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productApi } from "../../Api/Products";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState('');
  const productDetails = async () => {
    try {
      const response = await productApi.productDetails(params.id);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);
  return (
    <div>
      <Row className="mt-5 bg-light p-3 rounded">
        <Col xs={12} md={6}>
          <h5 className="mt-5 ms-5"> 
            <strong className="text-secondary me-3">ID:</strong> {product.id}
          </h5>
          <h5 className="mt-5 ms-5"> 
            <strong className="text-secondary me-3">Product Name:</strong>{" "}
            {product.productName}
          </h5>
          <h5 className="mt-5 ms-5"> 
            <strong className="text-secondary me-3">Price:</strong>{" "}
            {product.price}
          </h5>
          <h5 className="mt-5 ms-5"> 
            <strong className="text-secondary me-3">Quantity:</strong>{" "}
            {product.quantity}
          </h5>
        </Col>
        <Col xs={12} md={6} style={{ height: '400px' }}>
          <img src={product.image} alt="" />
        </Col>
      </Row>
    </div>
  );
}
