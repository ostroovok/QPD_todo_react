import React from "react";
import "./ItemList.css";
import DeleteButton from "../componentsUI/DeleteButton";
import ChangeButton from "../componentsUI/ChangeButton";
import {IListElement} from './IListElement';



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
          <DeleteButton />
        </span>
      </div>
    </li>
  );
};

interface IList{
    list: IListElement[];
}

const ItemList: React.FC<IList> = (list: IList) => {
  let JSXlist = list.list.map(({ title, attachment, description }: IListElement, index) => {
    return (
      <ListElement
        
        title={title}
        description={description}
        attachment={attachment}
      />
    );
  });
  return (
    <div>
      <ul className="list">
        {JSXlist}
        {/*                 
                <ListElement {...{title: "Задача21", description:"Описание",attachment:"Категория1"}}/>
                <ListElement {...{title: "Задача2", description:"Описание",attachment:""}}/>
                <ListElement {...{title: "Задача4", description:"Описание",attachment:"Категория1"}}/>
                <ListElement {...{title: "Задача12", description:"Описание",attachment:""}}/>
                <ListElement {...{title: "Задача9", description:"Описание",attachment:""}}/> */}
      </ul>
    </div>
  );
};

export default ItemList;
