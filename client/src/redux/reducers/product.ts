import { createSlice } from "@reduxjs/toolkit";
import productService from "../../services/product";

type Product = {
  id: string;
  name: string;
  description: string;
  categories: string[];
  variants: string[];
  sizes: string[];
};

const initialState: Product[] = [];

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const setAllProducts = (token: string) => {
  return async (dispatch: any) => {
    const products = await productService.getAllProducts(token);
    dispatch(setProducts(products));
  };
};

export const { setProducts } = productReducer.actions;
export default productReducer.reducer;
