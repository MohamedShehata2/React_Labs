import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/products-components/ProductDetails";
import ProductForm from "./components/products-components/ProductForm";
import Products from "./components/products-components/Products";

export default function ProductRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Products} />
      <Route path="product" Component={Products} />
      <Route path="product/:id" Component={ProductDetails} />
      <Route path="product/:id/edit" Component={ProductForm} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
