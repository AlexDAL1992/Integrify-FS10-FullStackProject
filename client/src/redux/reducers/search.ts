import { createSlice } from "@reduxjs/toolkit";

const searchReducer = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchKeyword(state, action) {
      return action.payload;
    },
  },
});

export const { setSearchKeyword } = searchReducer.actions;
export default searchReducer.reducer;
