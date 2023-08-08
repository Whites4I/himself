import React from "react";
import "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/auth/auth.slice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to='posts'>Posts</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
          <li>
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(actions.toggleAuth(false));
                localStorage.removeItem("auth");
              }}
            >
              Log out
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
