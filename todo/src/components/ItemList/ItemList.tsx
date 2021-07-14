import React from "react";
import "./ItemList.css";
import DeleteButton from "../componentsUI/DeleteButton";
import ChangeButton from "../componentsUI/ChangeButton";
import { IListElement } from "./IListElement";

const ListElement: React.FC<IListElement> = ({
  title,
  attachment,
  description,
}) => {
  return (
    <li className="list-element">
      <div>
        <div>
          <span>
            <span className="list-element-title">{title}</span>
            <span className="list-element-attachment">{attachment}</span>
          </span>
        </div>
        <span className="list-element-description">{description}</span>
        <span className="actionButton">
          <ChangeButton />
          <DeleteButton
            title="Удаление ..."
            children={<div>Вы уверены, что хотите удалить "{title}"?</div>}
          />
        </span>
      </div>
    </li>
  );
};

interface IList {
  list: IListElement[];
}

const ItemList: React.FC<IList> = (list: IList) => {
  let JSXlist = list.list.map(
    ({ title, attachment, description }: IListElement, index) => {
      return (
        <ListElement
          title={title}
          description={description}
          attachment={attachment}
        />
      );
    }
  );
  return (
    <div>
      <ul className="list">{JSXlist}</ul>
    </div>
  );
};

export default ItemList;
