import * as React from 'react';
import { Redirect } from "react-router-dom";

import Authentication from "./Authentication";
import isAuthenticated from "./isAuthenticated";

interface Props {
  location: Location;
}

function Login({ location }: Props) {
  if (!isAuthenticated()) {
    return <Authentication location={location} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location }
      }}
    />
  );
};

export default Login;
