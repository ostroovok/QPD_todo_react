import React from "react";
import styles from './List.module.css';
import { ListItem } from "./ListItem";

interface ListProps {
  items: { itemId: number; title: JSX.Element; description: string }[];
  onDeleteClick: (itemId: number) => void;
  changeButtonTitle: string;
  deleteButtonTitle: string;
  onChangeClick: (itemId: number) => void;
}

const List: React.FC<ListProps> = ({
  items,
  changeButtonTitle,
  deleteButtonTitle,
  onChangeClick,
  onDeleteClick,
}) => {
  return (
    <div>
      <ul className={styles["list"]}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.itemId}
              title={item.title}
              itemId={item.itemId}
              description={item.description}
              changeButtonTitle={changeButtonTitle}
              deleteButtonTitle={deleteButtonTitle}
              onChangeClick={onChangeClick}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
