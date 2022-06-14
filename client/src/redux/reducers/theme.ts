import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: "",
  reducers: {
    setTheme(state, action) {
      return action.payload;
    },
  },
});

export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
