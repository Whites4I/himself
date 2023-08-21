import React from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";

const Navbar = () => {
  const { toggleAuth } = useActions();
  return (
    <div className='myNavbar'>
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
                toggleAuth(false);
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
