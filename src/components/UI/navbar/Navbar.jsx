import React from "react";
import "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
