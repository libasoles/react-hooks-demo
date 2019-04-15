import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { Login, Logout } from "../auth";
import isAuthenticated from "../auth/isAuthenticated";

function Routes() {
  const {pathname} = window.location;
  const sessionEndpoints = ['/login', '/logout'];

  if (!isAuthenticated() && !sessionEndpoints.includes(pathname)) {
    window.location.href = '/login';
  }

  return (
    <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
}

export default Routes;
