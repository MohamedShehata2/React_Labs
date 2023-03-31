import axios from "axios";
let url = "http://localhost:3004/data";
const getAllProducts = () => axios.get(url);
const productDetails = (id) => axios.get(`${url}/${id}`);
const deleteProduct = (id) => axios.delete(`${url}/${id}`);
const addProduct = (product) => axios.post(url, product);
const editProduct = (id, product) => axios.put(`${url}/${id}`, product);
export const productApi = {
  getAllProducts,
  productDetails,
  deleteProduct,
  addProduct,
  editProduct,
};
