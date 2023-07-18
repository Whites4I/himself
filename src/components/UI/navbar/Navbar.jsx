import React from "react";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
