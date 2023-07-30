import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth/auth.slice";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,
});
