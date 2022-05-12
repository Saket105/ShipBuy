import React from "react";
import logoRight from "../../assets/login_one.svg";
import logoLeft from "../../assets/login_three.svg";
import "./login.css";

const Login = () => {
  return (
    <div className="login-main-container">
      <div className="login-left-container">
        <img src={logoRight} alt="" />
      </div>
      <div className="login-center">
        <h1>Login Here</h1>
        <p>Hey, Enter your details to get sign in to your account</p>

        <form>
          <input
            className="input-login "
            type="text"
            placeholder="Enter UserId/Email"
          />
          <input
            className="input-login "
            type="password"
            placeholder="Enter Password"
          />
          <span>Having trouble in sign in ?</span>
          <button className="btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <div className="login-right-container">
        <img src={logoLeft} alt="" />
      </div>
    </div>
  );
};

export default Login;
