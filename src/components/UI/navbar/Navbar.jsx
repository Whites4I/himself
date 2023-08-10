import React from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/auth/auth.slice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className={cl.navbar}>
      <nav>
        <ul>
          <li>
            <Link to=''>
              <strong>Home</strong>
            </Link>
          </li>
          <li>
            <Link to='/posts'>
              <strong>Posts</strong>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <strong>About</strong>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <strong>Contact</strong>
            </Link>
          </li>
          <li>
            <Link
              className={cl.logout}
              onClick={(e) => {
                e.preventDefault();
                dispatch(actions.toggleAuth(false));
                localStorage.removeItem("auth");
              }}
            >
              <strong>Log out</strong>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
