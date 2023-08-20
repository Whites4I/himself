import React from "react";
import cl from "./Input.module.css";

const Input = ({ ...props }) => {
  return <input className={cl.myInput} {...props}></input>;
};

export default Input;
