import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Navbar from "./UI/navbar/Navbar";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.value);
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
