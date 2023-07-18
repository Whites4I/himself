import React from "react";
import { privateRoutes } from "../router";
import { Route, Routes } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default PrivateRoute;
