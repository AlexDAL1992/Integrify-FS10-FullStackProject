import { createSlice } from "@reduxjs/toolkit";
import productService from "../../services/product";

export type Product = {
  id: string;
  name: string;
  img: string;
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
    updateAProduct(state, action) {
      return state.map((product) =>
        product.id !== action.payload.id ? product : action.payload
      );
    },
    deleteAProduct(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
    createAProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const setAllProducts = (token: string) => {
  return async (dispatch: any) => {
    const products = await productService.getAllProducts(token);
    dispatch(setProducts(products));
  };
};

export const createProduct = (product: any) => {
  return async (dispatch: any) => {
    const createNew = await productService.createNewProduct(product);
    dispatch(createAProduct(createNew));
  };
};

export const editProduct = (productId: string, product: any) => {
  return async (dispatch: any) => {
    const editedProduct = await productService.editAProduct(productId, product);
    dispatch(updateAProduct(editedProduct));
  };
};

export const deleteProduct = (productId: string) => {
  return async (dispatch: any) => {
    await productService.deleteAProduct(productId);
    dispatch(deleteAProduct(productId));
  };
};

export const { setProducts, updateAProduct, deleteAProduct, createAProduct } =
  productReducer.actions;
export default productReducer.reducer;
