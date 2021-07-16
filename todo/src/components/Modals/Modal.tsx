import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IModalProps } from "./IModalProps";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<IModalProps> = ({
  modalTitle: title,
  firstbtnTitle,
  secondbtnTitle,
  isOpen,
  onCancel,
  onSubmit,
  children,
}) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  const element = (
    <div className="modalOverlay">
      <div className="modalWindow">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <div>
            <button onClick={onCancel}>
              <FontAwesomeIcon icon={faTimes} color="#3F72AF" size="2x" />
            </button>
          </div>
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <button className="modalFooter-button-onSubmit" onClick={onSubmit}>
            {firstbtnTitle}
          </button>
          <button className="modalFooter-button-onClose" onClick={onCancel}>
            {secondbtnTitle}
          </button>
        </div>
      </div>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(element, document.body) : null;
};

export default Modal;
