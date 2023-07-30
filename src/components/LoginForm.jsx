import React from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import cl from "./style/LoginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/auth/auth.slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.value);
  console.log(isAuth);

  return (
    <div className={cl.login}>
      <form>
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
            dispatch(actions.toggleAuth(isAuth));
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
