import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import { AuthContext } from "./Libs/Auth";
import PrivateRoute from "./Libs/PrivateRoute";
import AuthRoute from "./Libs/AuthRoute";
import UpdateProfile from "./Components/UpdateProfile";
import Home from "./Components/Home";
import Lists from "./Components/Lists";
import TasksList from "./Components/TasksList";
import TasksForm from "./Components/TasksForm";

function App() {
  const [isAuth, userHasAuth] = useState(false);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const isLoggedIn = async () => {
    let data = await fetch("http://localhost:3000/users/token", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let user = await data.json();
    // console.log(user);

    if (user.token) {
      userHasAuth(user);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, userHasAuth }}>
      <Router>
        <div className="app">
          <div className="app__body">
            <Switch>
              <AuthRoute path="/register">
                <Register />
              </AuthRoute>
              <AuthRoute path="/login">
                <Login />
              </AuthRoute>
              <PrivateRoute path="/profile">
                <Sidebar />
                <Profile />
              </PrivateRoute>
              <PrivateRoute path="/profileupdate">
                <Sidebar />
                <UpdateProfile />
              </PrivateRoute>
              <PrivateRoute path="/tasks">
                <Sidebar />
                <TasksList />
              </PrivateRoute>
              <PrivateRoute path="/lists">
                <Sidebar />
                <Lists />
              </PrivateRoute>
              <PrivateRoute path="/chat">
                <Sidebar />
              </PrivateRoute>
              <PrivateRoute path="/">
                <Sidebar />
                <Home />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
