import { createSlice } from "@reduxjs/toolkit";
import userListService from "../../services/user-list";

export type User = {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string;
};

const initialState: User[] = [];

const userListReducer = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    deleteUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const getAllUsers = () => {
  return async (dispatch: any) => {
    const users = await userListService.getAllUsers();
    dispatch(setUsers(users));
  };
};

export const deleteAUser = (userId: string) => {
  return async (dispatch: any) => {
    await userListService.deleteAUser(userId);
    dispatch(deleteUser(userId));
  };
};

export const { setUsers, deleteUser } = userListReducer.actions;
export default userListReducer.reducer;
