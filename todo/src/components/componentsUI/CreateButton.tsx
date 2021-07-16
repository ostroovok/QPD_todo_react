import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modals/Modal";
import "./style-buttons.css";
import { useModal } from "../Modals/useModal";
import { addTask } from "../../store/tasksSlices";
import { addCategory } from "../../store/categorySlices";
import { IListElement } from "../ItemList/IListElement";

export const CreateButton: React.FC<{
  buttonTitle: string;
  modalTitle: string;
  children: JSX.Element;
  content: IListElement;
}> = ({
  buttonTitle,
  modalTitle,
  children,
  content = {
    title: "invalid title",
    attachment: "",
    description: "",
    type: "",
  },
}) => {
  const { isOpen, toggle } = useModal();
  const dispatch = useDispatch();

  const onSubmit = () => {
    toggle();

    if (content.type === "task") {
      dispatch(
        addTask({
          title: content.title,
          attachment: content.attachment,
          description: content.description,
          type: content.type,
        })
      );
    } else if (content.type === "category") {
      dispatch(
        addCategory({
          title: content.title,
          description: content.description,
          type: content.type,
        })
      );
    }
  };
  const onCancel = () => toggle();

  return (
    <>
      <button className="button1" onClick={toggle}>
        {buttonTitle}
      </button>
      <Modal
        modalTitle={modalTitle}
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
