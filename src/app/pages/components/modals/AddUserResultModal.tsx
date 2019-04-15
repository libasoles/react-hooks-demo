import * as React from "react";
import Button from "../../../components/Button";

interface Props {
  invitationLink: string;
  close(): void;
}

function AddUserResultModal({ invitationLink, close }: Props): JSX.Element {
  return (
    <div className="box">
      <h3 className="title is-3">Add User</h3>
      <div className="field">
        <h5 className="subtitle is-5">
          Copy the new user registration link below to grant access to the
          dashboard.
        </h5>
        <p className="control">
          <textarea
            id="invitation-link"
            className="textarea"
            rows={3}
            value={invitationLink}
            readOnly={true}
          />
        </p>
      </div>
      <div className="field has-addons has-addons-right ">
        <p className="control">
          <Button onClick={close}>
            Close
          </Button>
        </p>
      </div>
    </div>
  );
}

export default AddUserResultModal;
