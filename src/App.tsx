import * as React from "react";
import { useState } from "react";
import { Router } from "react-router";

import { useModal } from "./app/context/modalContext";
import Modal from "./app/components/Modal";
import Routes from "./app/Routes";
import { ProfileProvider } from "./app/context/profileContext";
import useProfileFetch from "./app/useProfileFetch";
import { history } from "./core";
import { toggleModal } from "./store/modalActions";

function App() {
  const { modal, dispatchModal } = useModal();
  const [profile, setProfile] = useState({
    email: "",
    authorization: { roles: [], permissions: [] }
  });
  useProfileFetch(setProfile);

  return (
    <ProfileProvider data={profile}>
      <Router history={history}>
        <Routes />
      </Router>
      <Modal
        isActive={modal.isActive}
        close={() => dispatchModal(toggleModal())}
      >
        {modal.content}
      </Modal>
    </ProfileProvider>
  );
}

export default App;
