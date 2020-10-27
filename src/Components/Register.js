import React, { useState } from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const register = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://img1.pnghut.com/5/14/9/3eiTeZwjRC/brand-evernote-mobile-app-itunes-logo.jpg"
          alt=""
        />
      </Link>
      <h1>Register</h1>
      <div className="register__container">
        <form>
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={register}
            type="submit"
            className="register__registerButton animation"
          >
            <span>Create Account</span>
          </button>
        </form>

        <Link to="/login">
          <button className="register__loginButton animation">
            <span>Already have an account?</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
