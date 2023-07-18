import React from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import cl from "./style/LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className={cl.login}>
      <form>
        <div className={cl.hello}>
          <h1>Hello</h1>
        </div>
        <Input placeholder='Email@example.com'></Input>
        <Input placeholder='Password'></Input>
        <Button>Login</Button>
        <Link>Registred</Link>
      </form>
    </div>
  );
};

export default LoginForm;
