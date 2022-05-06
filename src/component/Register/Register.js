import React from "react";
import registerOne from "../../assets/login_one.svg";
import "./Register.css";

const Register = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="Register-container">
          <h1>Register With Us</h1>
          <form className="register-form">
            <input
              type="text"
              className="input-register"
              placeholder="Enter Your name"
            />
            <input
              type="email"
              className="input-register"
              placeholder="Enter Your Email"
            />

            <input
              type="text"
              className="input-register"
              placeholder="Enter Mobile Number"
            />

            <input
              type="password"
              className="input-register"
              placeholder="Enter Password"
            />

            <input
              type="password"
              className="input-register"
              placeholder="Confirm Password"
            />

            <button className="reg-btn">SIGN UP</button>
          </form>
        </div>
      </div>
      <div className="right">
        <img src={registerOne} alt="" />
      </div>
    </div>
  );
};

export default Register;
