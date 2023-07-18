import React from "react";
import { Routes, Route } from "react-router-dom";
import { pageRoutes } from "../../router/";

const AppRouter = () => {
  return (
    <Routes>
      {pageRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
