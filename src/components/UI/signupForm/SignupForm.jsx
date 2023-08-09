import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import cl from "./SignupForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className={cl.login}>
      <form className={cl.myForm}>
        <div className={cl.hello}>
          <h1>Sign up</h1>
        </div>
        <Input placeholder='Email@example.com'></Input>
        <Input placeholder='Password'></Input>
        <Button>Sign up</Button>
        <p>
          Already registered?{" "}
          <Link className={cl.link} to='/login'>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
