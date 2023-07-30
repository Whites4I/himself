import Home from "../pages/private/Home";
import Contact from "../pages/private/Contact";
import Error from "../pages/private/Error";
import About from "../pages/private/About";
import Login from "../pages/public/Login";
import Signup from "../pages/public/Signup";
import Posts from "../pages/private/Posts";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <Error /> },
  { path: "/posts", element: <Posts /> },
];

export const publicRoutes = [
  { path: "/*", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];
