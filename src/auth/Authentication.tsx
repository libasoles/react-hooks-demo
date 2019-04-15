import * as React from "react";
import { useState } from "react";

import { useConfig } from "../app/context/configContext";
import useAuthentication from "./useAuthentication";

interface Props {
  location: Location;
}

/**
 * Basically, <Authentication> has three responsibilities:
 *
 * Show login form with lock.show().
 * Issue sessions after user is authenticated.
 * Redirect to home after session is issued.
 */
export default function Authentication({location}: Props) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    window.location.href = '/';
  }

  const config = useConfig();
  useAuthentication(config.auth0, location, config.cdnUrl, setLoggedIn);

  /** If you want, you can define a div here, with an id.
   * And then configure lock object so it will inject the html here */
  return <></>;
}