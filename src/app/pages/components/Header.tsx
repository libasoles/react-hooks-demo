import * as React from "react";

import MenuItems from "./header/MenuItems";
import {useConfig} from "../../context/configContext";

function Header(): JSX.Element {
  const config = useConfig();

  return (
    <div className="navbar is-primary">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <img
            className="navbar-item logo"
            src={`${config.cdnUrl}/images/logo-white.svg`}
            alt="myLiberis Logo"
          />
        </div>
        <div className="burger navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <MenuItems />
        </div>
      </div>
    </div>
  );
}

export default Header;
