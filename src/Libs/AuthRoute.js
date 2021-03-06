import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function AuthRoute({ children, ...rest }) {
  const { isAuth } = useAuth();
  const redirect = querystring("redirect");
  return (
    <Route {...rest}>
      {!isAuth ? (
        children
      ) : (
        <Redirect
          to={redirect === "" || redirect === null ? "/profile" : redirect}
        />
      )}
    </Route>
  );
}
