import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../../services/login";

type User = {
  token: string;
  user: { [key: string]: any };
};

const initialState: User = {
  token: "",
  user: {},
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const handleLoginSuccess = (res: any) => {
  return async (dispatch: any) => {
    const user = await handleLogin(res);
    dispatch(setUser(user))
  };
};

export const { setUser } = userReducer.actions;
export default userReducer.reducer;
