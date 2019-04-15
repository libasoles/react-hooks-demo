import * as React from "react";
import { Redirect } from "react-router-dom";

interface Props {
  location: Location;
}

function Logout({ location }: Props) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");

  return (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
    />
  );
}

export default Logout;
