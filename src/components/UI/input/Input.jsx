import React from "react";

const Input = ({ child, ...props }) => {
  return <input {...props}>{child}</input>;
};

export default Input;
