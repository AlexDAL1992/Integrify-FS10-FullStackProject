import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../reducers/product";

const initialState: Product[] = [];

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
