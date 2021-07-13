import React from "react";
import Modal from "../Modals/Modal";
import { IModalProps } from "../Modals/IModalProps";
import "./style-buttons.css";
import { useModal } from "../Modals/useModal";

const element = (
  <div>
    <p>ddtlbnt</p>
    <input></input>
  </div>
);

export const CreateButton: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  const { isOpen, toggle } = useModal();

  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <>
      <button className="button1" onClick={toggle}>
        {title}
      </button>
      <Modal
        title="title"
        children={<div>{element}</div>}
        isOpen={isOpen}
        onCancel={onCancel}
        onSubmit={onConfirm}
      />
    </>
  );
};
