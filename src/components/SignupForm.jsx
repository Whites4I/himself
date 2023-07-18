import React from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import cl from "./style/SignupForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className={cl.login}>
      <form>
        <div className={cl.hello}>
          <h1>Sign up</h1>
        </div>
        <Input placeholder='Email@example.com'></Input>
        <Input placeholder='Password'></Input>
        <Button>Sign up</Button>
        <p>
          Already registered?{" "}
          {
            <Link className={cl.link} to='login'>
              Log in
            </Link>
          }
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
