import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth: (state, { payload: isAuth }) => {
      state.value = isAuth;
    },
  },
});

export const { actions, reducer } = authSlice;
