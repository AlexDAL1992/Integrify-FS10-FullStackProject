import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import productReducer from "./reducers/product";
import searchReducer from "./reducers/search";
import cartReducer from "./reducers/cart";
import userListReducer from "./reducers/user-list";
import themeReducer from "./reducers/theme";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    search: searchReducer,
    userList: userListReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
