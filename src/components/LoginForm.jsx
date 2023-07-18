import React from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import "./style/LoginForm.module.css";

const LoginForm = () => {
  return (
    <div>
      <div className='container'>
        <form>
          <Input placeholder='Email@example.com'></Input>
          <Input placeholder='Password'></Input>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
