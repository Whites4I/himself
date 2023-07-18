import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import About from "../pages/About";

export const pageRoutes = [
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/*", element: <Error /> },
];
