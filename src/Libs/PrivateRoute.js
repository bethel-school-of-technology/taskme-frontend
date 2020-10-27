import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export default function PrivateRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAuth();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      )}
    </Route>
  );
}
