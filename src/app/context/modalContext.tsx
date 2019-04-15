import * as React from "react";
import { useReducer } from "react";

import modalReducer, { modalInitialState } from "../../store/modalReducer";
import ModalInterface from "../../types/Modal";
import { ContentSetAction, ToggleAction } from "../../store/modalActions";

const ModalContext = React.createContext({
  modal: modalInitialState,
  dispatchModal: (action: ToggleAction | ContentSetAction) => {}
});

interface ProviderProps {
  initialState?: ModalInterface;
  children: React.ReactNode;
}

function ModalProvider({
  initialState = modalInitialState,
  children
}: ProviderProps) {
  const [modal, dispatchModal] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ modal, dispatchModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  return React.useContext(ModalContext);
}

export { ModalProvider, useModal };
