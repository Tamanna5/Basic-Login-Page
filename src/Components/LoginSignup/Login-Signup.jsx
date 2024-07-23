import React, { useState } from 'react';
import "./LoginSignup.css";
import user_icon from '../Assets/user_icon.jpeg';
import email_icon from '../Assets/email_icon.png';
import password_icon from '../Assets/password_icon.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action === "SignUp" ? "Sign Up" : "Login"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "SignUp" && (
          <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text" placeholder="Username"/>
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
        {action === "Login" && (
          <div className="forget-password">Forgot Password?</div>
        )}
        <div className="submit-container">
          <div className={`submit ${action === "SignUp" ? "gray" : ""}`} onClick={() => setAction("SignUp")}>
            Sign Up
          </div>
          <div className={`submit ${action === "Login" ? "gray" : ""}`} onClick={() => setAction("Login")}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
