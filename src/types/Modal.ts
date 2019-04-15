import * as React from "react";

export default interface ModalInterface {
  isActive: boolean;
  content: React.FunctionComponent | JSX.Element | null;
}