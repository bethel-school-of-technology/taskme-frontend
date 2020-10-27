import React, { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../Libs/StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://img1.pnghut.com/5/14/9/3eiTeZwjRC/brand-evernote-mobile-app-itunes-logo.jpg"
          alt=""
        />
      </Link>
      <h1>Sign-In</h1>
      <div className="login__container">
        <form>
          {/* <h5>E-mail</h5> */}
          <input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <h5>Password</h5> */}
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton animation"
          >
            <span>Sign In</span>
          </button>
        </form>

        <Link to="/register">
          <button className="login__registerButton animation">
            <span>Create Account</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
