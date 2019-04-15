import * as React from "react";
import { Dispatch } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  setModalContent,
  toggleModal
} from "../../../../../store/modalActions";
import Button from "../../../../components/Button";
import AddUserModal from "../../modals/AddUserModal";
import { useModal } from "../../../../context/modalContext";

function onInviteUser(dispatch: Dispatch<any>) {
  const toggleModalAction = toggleModal();
  dispatch(
    setModalContent(
      <AddUserModal
        close={() => {
          dispatch(toggleModalAction);
        }}
      />
    )
  );
  dispatch(toggleModalAction);
}

export default function InviteUserButton() {
  const { dispatchModal } = useModal();

  return (
    <p className="control navbar-item">
      <Button
        text="Invite User"
        icon={faPlus}
        variant="white"
        onClick={() => onInviteUser(dispatchModal)}
      />
    </p>
  );
}
