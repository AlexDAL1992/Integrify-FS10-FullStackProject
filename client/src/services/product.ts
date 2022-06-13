import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setProducts } from "../redux/reducers/product";

const baseUrl = "http://localhost:5000/api/v1/products";

const getAllProducts = async (token: string) => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
    
  } catch (error) {
    console.log(error);
  }
};

export default { getAllProducts };
