import { useEffect } from "react";
import Auth0Lock from "auth0-lock";

import { AuthConfigInterface } from "../types/Config";

export default function useAuthentication(
  config: AuthConfigInterface,
  location: Location,
  cdnUrl: string,
  setLoggedIn: (isLoggedIn: boolean) => void
) {
  useEffect(() => {
    const auth0LockOptions = {
      auth: {
        responseType: "token id_token",
        params: { scope: "openid email user_metadata" },
        sso: false
      },
      closable: false,
      avatar: undefined,
      rememberLastLogin: false,
      theme: {
        primaryColor: "#03d1cc",
        logo: cdnUrl + "/images/logo.svg",
        displayName: ""
      },
      languageDictionary: {
        signupTitle: "Create your account",
        passwordInputPlaceholder: "password"
      }
    };

    const lock = new Auth0Lock(
      config.clientId,
      config.domain,
      auth0LockOptions
    );

    lock.on("authenticated", authResult => {
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );

      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);

      setLoggedIn(true);
    });

    const showOptions = {
      allowSignUp: false
    };

    // Avoid showing Lock when hash is parsed.
    if (!/access_token|id_token|error/.test(location.hash)) {
      lock.show(showOptions);
    }
  }, []);
}
