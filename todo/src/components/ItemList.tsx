import React from "react";
import './ItemList.css'

interface IListElement{
    title: string;
    description: string;
    attachment: string; // впоследствии - объект !
}

const ListElement: React.FC<IListElement> = (props) => {
    return(
        <li className="list-element">
            <div>
                <div>
                    <span>
                        <span className="list-element-title">{props.title}</span>
                        <span className="list-element-attachment">{props.attachment}</span>
                    </span>
                </div>
                <span className="list-element-description">{props.description}</span>
            </div>
            
        </li>
    );
}

function ItemList(){
    return(
        <div>
            <ul className="list">
                <ListElement {...{title: "Задача1", description:"Описание",attachment:"Категория2"}}/>
                <ListElement {...{title: "Задача21", description:"Описание",attachment:"Категория1"}}/>
                <ListElement {...{title: "Задача2", description:"Описание",attachment:""}}/>
                <ListElement {...{title: "Задача4", description:"Описание",attachment:"Категория1"}}/>
                <ListElement {...{title: "Задача12", description:"Описание",attachment:""}}/>
                <ListElement {...{title: "Задача9", description:"Описание",attachment:""}}/>
            </ul>
        </div>
    );
}

export default ItemList;