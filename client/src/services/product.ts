import axios from "axios";
import { Product } from "../redux/reducers/product";
const baseUrl = "http://localhost:5000/api/v1/products";

const getAllProducts = async (token: string) => {
  try {
    const res = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = async (newProduct: Product) => {
  try {
    const res = await axios.post(baseUrl, newProduct);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const editAProduct = async (productId: string, newProduct: Product) => {
  try {
    const res = await axios.put(`${baseUrl}/${productId}`, newProduct);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteAProduct = async (productId: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/${productId}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
};

export default { getAllProducts, createNewProduct, editAProduct, deleteAProduct };
