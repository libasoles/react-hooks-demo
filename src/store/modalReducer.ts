import ModalInterface from "../types/Modal";
import { actions, ContentSetAction, ToggleAction } from "./modalActions";

const initialState: ModalInterface = {
  isActive: false,
  content: null
};

export type Action = ToggleAction | ContentSetAction;

function modalReducer(state: ModalInterface = initialState, action: Action): ModalInterface {
  switch (action.type) {
    case actions.toggle:
      return { ...state, isActive: !state.isActive };
    case actions.contentSet:
      return { ...state, content: (<ContentSetAction>action).payload };
    default:
      return state;
  }
}

export { initialState as modalInitialState };
export default modalReducer;
