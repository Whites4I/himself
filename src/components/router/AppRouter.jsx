import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Navbar from "../UI/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/auth/auth.slice";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(actions.toggleAuth(true));
    }
  }, []);

  return isAuth ? (
    <BrowserRouter>
      <Navbar />
      <PrivateRoute />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  );
};

export default AppRouter;
