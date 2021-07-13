import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IModalProps } from "./IModalProps";
import './Modal.css'

const Modal: React.FC<IModalProps> = ({
  title,
  isOpen,
  onCancel,
  onSubmit,
  children,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isOpen) {
        onCancel();
    }
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isOpen]);

  const element = (
    <div className="modalOverlay">
      <div className="modalWindow">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          {/* <Icon name="times" onClick={prop.onCancel} /> */}
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(element, document.body): null;
};

export default Modal;
