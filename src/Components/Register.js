import React, { useState } from "react";
import "../Styles/Register.css";
import { Link, useHistory } from "react-router-dom";
// import { useAuth } from "../Libs/Auth";
import taskmeLogo from "../Images/taskmeLogo.jpg";

function Register() {
  let history = useHistory();
  // const { isAuth, userHasAuth } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isError, setIsError] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      if (password !== cPassword) {
        setIsError("Passwords don't match.");
        return;
      }
      if (!email || !password || !cPassword || !firstName || !lastName) {
        setIsError("Please fill in all fields.");
        return;
      }
      if (password.length < 5) {
        setIsError("Passwords must be at least 5 characters long.");
        return;
      }

      let data = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          username,
        }),
      });

      let user = await data.json();

      if (user.created) {
        history.push("login");
      } else {
        alert("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src={taskmeLogo}
          alt=""
        />
      </Link>
      <h1>Register</h1>
      <div className="register__container">
        <div className="register__error">{isError}</div>
        <form>
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </form>
      </div>
      <button
        onClick={register}
        type="submit"
        className="register__registerButton animation"
      >
        <span>Create Account</span>
      </button>

      <Link to="/login">
        <button className="register__loginButton animation">
          <span>Already have an account?</span>
        </button>
      </Link>
    </div>
  );
}

export default Register;
