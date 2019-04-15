import * as React from "react";
import { Dispatch } from "react";

import ApiInterface from "../../../../../types/Api";
import {
  ContentSetAction,
  setModalContent,
  ToggleAction,
  toggleModal
} from "../../../../../store/modalActions";
import AddUserResultModal from "../AddUserResultModal";

interface Params {
  email: string;
}

async function inviteUser(
  api: ApiInterface,
  data: Params,
  dispatch: Dispatch<ToggleAction> & Dispatch<ContentSetAction>
) {
  const response = await api.post("invite-user", data);

  const toggleModalAction = toggleModal();
  dispatch(
    setModalContent(
      <AddUserResultModal
        invitationLink={response.invitationLink}
        close={() => {
          dispatch(toggleModalAction);
        }}
      />
    )
  );
}

export default inviteUser;