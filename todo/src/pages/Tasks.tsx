import Header from "../components/Header/NavigationMenu";
import ItemList from "../components/ItemList/ItemList";
import { CreateButton } from "../components/componentsUI/CreateButton";
import "./style-pages.css";
import {IListElement} from "../components/ItemList/IListElement";

function Tasks() {
  const list: IListElement[] = [
    { title: "Задача21", description: "Описание", attachment: "Категория1" },
    { title: "Задача2", description: "Описание", attachment: "" },
    { title: "Задача4", description: "Описание", attachment: "Категория1" },
    { title: "Задача12", description: "Описание", attachment: "" },
    { title: "Задача9", description: "Описание", attachment: "" },
  ];

  return (
    <div>
      <div className="actionmenu">
        <CreateButton {...{ title: "Добавить задачу" }} />
      </div>
      <Header />
      <ItemList list={list} />
    </div>
  );
}

export default Tasks;
