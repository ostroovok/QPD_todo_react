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
        <div className="list-element-description">{description}</div>
        <div className="actionButton">
          <ChangeButton />
          <DeleteButton
            title="Удаление ..."
            children={
              <div className="list-element-title">
                Вы уверены, что хотите удалить "{title}"?
              </div>
            }
          />
        </div>
      </div>
    </li>
  );
};

const ItemList = (props: { list: IListElement[] }): JSX.Element => {
  let JSXlist = props.list.map(
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
