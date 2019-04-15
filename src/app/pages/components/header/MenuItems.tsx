import * as React from "react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useProfile } from "../../../context/profileContext";
import Button from "../../../components/Button";
import InviteUserButton from "./menuItems/InviteUserButton";
import { isAuthenticated, useAuthorization } from "../../../../auth";
import { Permissions } from "../../../../auth/useAuthorization";

export default function MenuItems() {
  const profile = useProfile();
  const { userCan } = useAuthorization();
  const canInviteUsers = userCan(Permissions.CreateNewUser);

  return (
    <>
      {isAuthenticated() && (
        <>
          <strong className="navbar-item">{profile.clientID}</strong>
          <span className="navbar-item">{profile.email}</span>

          {canInviteUsers && <InviteUserButton />}

          <div className="control navbar-item">
            <Link to="/logout">
              <Button text="Sign-out" icon={faSignOutAlt} variant="white" />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
