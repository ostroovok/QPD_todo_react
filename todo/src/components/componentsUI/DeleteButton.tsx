import React from "react";
import "./style-buttons.css";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modals/Modal";
import { useModal } from "../Modals/useModal";
import { del } from '../../store/tasksSlices'

const DeleteButton: React.FC<{
  title: string;
  children: JSX.Element;
}> = ({title, children }) => {
  const { isOpen, toggle } = useModal();

  const dispatch = useDispatch();

  const onSubmit = () => {
    toggle();
    //sdispatch()
  };
  const onCancel = () => toggle();
  return (
    <span>
      <button className="button1 button2" onClick={toggle}>
        <FontAwesomeIcon icon={faTrash} color="#3F72AF" size="lg" />
      </button>
      <Modal
        modalTitle={title}
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
