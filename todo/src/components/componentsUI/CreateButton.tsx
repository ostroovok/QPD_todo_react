import React from "react";
import Modal from "../Modals/Modal";
import "./style-buttons.css";
import { useModal } from "../Modals/useModal";

export const CreateButton: React.FC<{
  buttonTitle: string;
  title: string;
  children: JSX.Element;
}> = ({ buttonTitle, title, children }) => {
  const { isOpen, toggle } = useModal();

  const onSubmit = () => toggle();
  const onCancel = () => toggle();

  return (
    <>
      <button className="button1" onClick={toggle}>
        {buttonTitle}
      </button>
      <Modal
        title={title}
        firstbtnTitle="Создать"
        secondbtnTitle="Закрыть"
        children={<div>{children}</div>}
        isOpen={isOpen}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </>
  );
};
