import React from "react";
import "../Styles/Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://library.kissclipart.com/20180901/se/kissclipart-task-app-logo-clipart-showbox-computer-icons-d296fbef0120cf8c.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Login;
