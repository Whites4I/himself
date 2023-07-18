import React from "react";
import Input from "./UI/input/Input";

const LoginForm = () => {
  return (
    <form>
      <Input placeholder='Email@example.com'></Input>
      <Input placeholder='Password'></Input>
    </form>
  );
};

export default LoginForm;
