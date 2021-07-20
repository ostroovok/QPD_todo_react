import React, { useCallback } from "react";
import styles from "./ListItem.module.css";
import { ChangeButton, DeleteButton } from "../../UI";

interface ListItemProps {
  title: JSX.Element;
  description: string;
  onDeleteClick: (rowId: number) => void;
  deleteButtonTitle: string;
  onChangeClick: (rowId: number) => void;
  changeButtonTitle: string;
  itemId: number;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  onDeleteClick,
  changeButtonTitle,
  deleteButtonTitle,
  itemId,
  onChangeClick,
}) => {
  const onChangeClickHandler = useCallback(() => {
    onChangeClick(itemId);
  }, [itemId, onChangeClick]);

  const onDeleteClickHandler = useCallback(() => {
    onDeleteClick(itemId);
  }, [itemId, onDeleteClick]);

  return (
    <li className={styles["list-element"]}>
      <div className={styles["list-element-box"]}>
        {title}
        <div className={styles["list-element-description"]}>{description}</div>
      </div>
      <div className={styles["actionButton"]}>
        <ChangeButton
          title={changeButtonTitle}
          onClick={onChangeClickHandler}
        />
        <DeleteButton
          title={deleteButtonTitle}
          onClick={onDeleteClickHandler}
        />
      </div>
    </li>
  );
};

export default ListItem;
