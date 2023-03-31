/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { productApi } from "../../Api/Products";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function ProductForm() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const validationYup = Yup.object().shape({
    productName: Yup.string()
      .min(3, "This name is too short!")
      .required("This name is required"),
    price: Yup.number()
      .min(1, "Price should be greater then 1$")
      .required("price is required"),
    quantity: Yup.number()
      .min(1, "quantity should be greater then 1 pice")
      .required("quantity is required"),
  });

  const getProduct = async () => {
    try {
      let response = await productApi.productDetails(id);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id !== "0") getProduct();
  }, []);

  const onSubmit = async (values) => {
    if (id === "0") {
      try {
        await productApi.addProduct(values);
        navigate("/product");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await productApi.editProduct(id, values);
        navigate("/product");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container mt-5" style={{ height: "700px" }}>
      <Formik
        validationSchema={validationYup}
        initialValues={product}
        enableReinitialize={product}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Product Name
              </label>
              <Field
                name="productName"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="product name"
              />
              <div className="text-danger">
                <ErrorMessage name="productName" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <Field
                name="price"
                type="number"
                className="form-control"
                id="price"
                aria-describedby="emailHelp"
                placeholder="product price"
              />
              <div className="text-danger">
                <ErrorMessage name="price" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <Field
                name="quantity"
                type="number"
                className="form-control"
                id="quantity"
                aria-describedby="emailHelp"
                placeholder="product quantity"
              />
              <div className="text-danger">
                <ErrorMessage name="quantity" />
              </div>
            </div>
            <button type="submit" className="btn btn-dark">
              {id === "0" ? "Add Product" : "Edit Product"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
