import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modals/Modal";
import "./style-buttons.css";
import { useModal } from "../Modals/useModal";
import { add } from '../../store/tasksSlices'
import { Action } from "redux";

export const CreateButton: React.FC<{
  buttonTitle: string;
  title: string;
  children: JSX.Element;
}> = ({ buttonTitle, title, children }) => {
  const { isOpen, toggle } = useModal();
  //const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    toggle();
    dispatch(add({title:"new",attachment:"new", description:"new"}))
  };
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
