/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productApi } from "../../Api/Products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getAllProducts = async () => {
    try {
      let response = await productApi.getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const deleteProduct = async (id) => {
    await productApi.deleteProduct(id);
    let filteredProduct = products.filter((item) => item.id !== id);
    setProducts(filteredProduct);
  };

  return (
    <div>
      <Container>
        <Row className="my-3">
          <Col>
            <h2>Products Information</h2>
          </Col>
        </Row>
        {products.map((product, index) => (
          <Row className="mt-5 bg-light p-3 rounded" key={index}>
            <Col xs={12} md={6}>
              <h5>
                <strong className="text-secondary me-3">ID:</strong>{" "}
                {product.id}
              </h5>
              <h5>
                <strong className="text-secondary me-3">Product Name:</strong>{" "}
                {product.productName}
              </h5>
              <h5>
                <strong className="text-secondary me-3">Price:</strong>{" "}
                {product.price}
              </h5>
              <h5>
                <strong className="text-secondary me-3">Quantity:</strong>{" "}
                {product.quantity}
              </h5>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="text-center mb-5 fw-bold text-secondary">
                Actions
              </h3>
              <div className="d-flex justify-content-between">
                <i
                  className="btn fs-2 bi bi-eye text-success"
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                ></i>
                <i
                  className="btn fs-2 bi bi-pencil-square text-info"
                  onClick={() => {
                    navigate(`/product/${product.id}/edit`);
                  }}
                ></i>
                <i
                  className="btn fs-2 bi bi-trash3 text-danger"
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                ></i>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
