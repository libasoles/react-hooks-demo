import * as React from "react";

import { ModalInterface } from "../../types";

function Modal({isActive, close, children}: ModalInterface) {
  const activeClass = isActive ? "is-active" : "";

  return (
    <div className={`modal ${activeClass}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          {children}
        </div>
      </div>
      <button className="modal-close is-large" onClick={close} />
    </div>
  );
};

export default Modal;
