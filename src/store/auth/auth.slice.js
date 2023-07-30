import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth: (state, { payload: isAuth }) => {
      console.log(state.value);
      isAuth ? (state.value = false) : (state.value = true);
      console.log(state.value);
    },
  },
});

export const { actions, reducer } = authSlice;
