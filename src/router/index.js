import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import About from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/*", element: <Error /> },
];

export const publicRoutes = [{ path: "/login", element: <Login /> }];
