import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/constants";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";
import { registerUserThunk, loginUserThunk, updateUserThunk } from "./userThunk";

export const registerUser = createAsyncThunk("user/registerUser",registerUserThunk);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage("user"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },

    [loginUser.fulfilled]: (state, { payload}) => {
      state.isLoading = false;
      state.user = payload;
      addUserToLocalStorage(payload);
      toast.success(`welcome back, ${payload.name}.`, toastConfig);
    },

    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastConfig);
    },

    [registerUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },

    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      addUserToLocalStorage(payload);
      toast.success(`welcome ${payload.name}.`, toastConfig);
    },

    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastConfig);
    },

    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },

    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      addUserToLocalStorage(payload);
      toast.success("profile updated.", toastConfig);
    },

    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastConfig);
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
