import React from "react";
import "./style-buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modals/Modal";
import { useModal } from "../Modals/useModal";

const DeleteButton: React.FC<{
  title: string;
  children: JSX.Element;
}> = ({title, children }) => {
  const { isOpen, toggle } = useModal();

  const onSubmit = () => toggle();
  const onCancel = () => toggle();
  return (
    <span>
      <button className="button1 button2" onClick={toggle}>
        <FontAwesomeIcon icon={faTrash} color="#3F72AF" size="lg" />
      </button>
      <Modal
        title={title}
        firstbtnTitle="Да"
        secondbtnTitle="Нет"
        children={<div>{children}</div>}
        isOpen={isOpen}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </span>
  );
};

export default DeleteButton;
