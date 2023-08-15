import React from "react";
import { publicRoutes } from "../../router";
import { Route, Routes } from "react-router-dom";

const PublicRoute = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default PublicRoute;
