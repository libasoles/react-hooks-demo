import * as React from "react";

type Component = React.ReactElement<any> | JSX.Element | null;

export interface ToggleAction {
  type: string;
}

export interface ContentSetAction {
  type: string;
  payload: Component;
}

export enum actions {
  toggle = "toggle",
  contentSet = "contentSet"
}

export function toggleModal(): ToggleAction {
  return {
    type: actions.toggle
  };
}

export function setModalContent(Component: Component = null): ContentSetAction {
  return {
    type: actions.contentSet,
    payload: Component
  };
}
