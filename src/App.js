import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Switch>
            <Route path="/register">
              <Sidebar />
              <Register />
            </Route>
            <Route path="/login">
              <Sidebar />
              <Login />
            </Route>
            <Route path="/tasks">
              <Sidebar />
            </Route>
            <Route path="/">
              <Sidebar />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;