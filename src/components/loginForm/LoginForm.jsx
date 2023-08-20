import React from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import cl from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const LoginForm = () => {
  const { toggleAuth } = useActions();

  return (
    <div className={cl.login}>
      <form className={cl.myForm}>
        <div className={cl.hello}>
          <h1>Log in</h1>
        </div>
        <Input placeholder='Email@example.com'></Input>
        <Input placeholder='Password'></Input>
        <div className={cl.forgotDiv}>
          <p className={cl.forgotPassword}>
            <Link className={cl.link} to=''>
              Forgot password?
            </Link>
          </p>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("auth", "true");
            toggleAuth(true);
          }}
        >
          Log in
        </Button>
        <p>
          Don't have an account?{" "}
          <Link className={cl.link} to='/signup'>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
