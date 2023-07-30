import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Navbar from "./UI/navbar/Navbar";

const AppRouter = () => {
  const isAuth = true;
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
