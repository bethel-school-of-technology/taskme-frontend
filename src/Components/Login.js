import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Libs/Auth";
import { withRouter } from "react-router";
import taskmeLogo from "../Images/taskmeLogo.jpg";


const Login = withRouter(({history}) => {
  const {isAuth, userHasAuth} = useAuth();
  const [isError, setIsError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let user = await data.json();

      if (user.status === 200) {
        userHasAuth(user);
        console.log("Welcome!")
        history.push('/')
      } else if(user.status === 410) {
        setIsError("User was deleted.");
        // alert("User was deleted");
      } else {
        setIsError("The username or password is incorrect.");
      }
    } catch (err) {
      console.log(err);
      setIsError("The username or password is incorrect.");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={taskmeLogo}
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
        <div className="login__error">{isError}</div>
      </div>
    </div>
  );
}
)

export default Login;
