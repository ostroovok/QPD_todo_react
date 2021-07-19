import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./styles.module.css";

interface ButtonBaseProps {
  onClick: () => void;
  title?: string;
}

interface ButtonProps extends ButtonBaseProps {
  className?: string;
  icon?: IconDefinition;
}

const Button: React.FC<ButtonProps> = ({ className, icon, onClick, title }) => {
  return (
    <button
      className={[styles["button"], className || ""].join(" ")}
      onClick={onClick}
      title={title}
    >
      {!!icon && <FontAwesomeIcon icon={icon} color="#3F72AF" size="lg" />}
    </button>
  );
};

const DeleteButton: React.FC<ButtonBaseProps> = ({ onClick, title }) => {
  return (
    <Button
      className={styles["button-delete"]}
      icon={faTrash}
      onClick={onClick}
      title={title}
    />
  );
};

const ChangeButton: React.FC<ButtonBaseProps> = ({ onClick, title }) => {
  return (
    <Button
      className={styles["button-edit"]}
      icon={faPen}
      onClick={onClick}
      title={title}
    />
  );
};

const CreateButton: React.FC<ButtonBaseProps> = ({ onClick, title }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export { ChangeButton, CreateButton, DeleteButton };
