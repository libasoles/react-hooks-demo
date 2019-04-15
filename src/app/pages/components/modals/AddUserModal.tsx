import * as React from "react";
import { useState } from "react";

import { useApi } from "../../../context/apiContext";
import { useModal } from "../../../context/modalContext";
import { validateEmail } from "../../../../core/validators";
import inviteUser from "./addUserModal/inviteUser";
import Button from "../../../components/Button";

interface Props {
  close(): void;
}

function AddUserModal({ close }: Props): JSX.Element {
  const api = useApi();
  const { dispatchModal } = useModal();
  const [email, setEmail] = useState<string>("");
  const isValidEmail = validateEmail(email);

  return (
    <div className="box">
      <h3 className="title is-3">Add User</h3>
      <div className="field has-addons">
        <p className="control is-expanded">
          <input
            className="input"
            type="email"
            placeholder="e.g. john.smith@email.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </p>
        <p className="control">
          <Button
            id="invite"
            variant="primary"
            disabled={!isValidEmail}
            onClick={() => inviteUser(api, { email }, dispatchModal)}
          >
            Invite
          </Button>
        </p>
      </div>
      <div className="field has-addons has-addons-right ">
        <p className="control">
          <Button onClick={close}>Close</Button>
        </p>
      </div>
    </div>
  );
}

export default AddUserModal;
