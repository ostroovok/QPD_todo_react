import Header from "../components/Header/NavigationMenu";
import ItemList from "../components/ItemList/ItemList";
import { CreateButton } from "../components/componentsUI/CreateButton";
import "./style-pages.css";
import "./style-fieldset.css";

import { IListElement } from "../components/ItemList/IListElement";

const element = (
  <>
    <form>
      <div>
        <fieldset className="name1">
          <legend>Имя</legend>
          <input placeholder="Введите имя задачи"></input>
        </fieldset>
        <span>
        <fieldset className="category">
          <legend>Категория</legend>
          <select >
            <option value="" selected >Выберите категорию</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </fieldset>
        </span>
      </div>
      <div>
        <fieldset className="description">
          <legend>Описание</legend>
          <input placeholder="Введите описание задачи"></input>
        </fieldset>
      </div>
    </form>
  </>
);

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
        <CreateButton
          buttonTitle="Добавить задачу"
          title="Создание задачи"
          children={element}
        />
      </div>
      <Header />
      <ItemList list={list} />
    </div>
  );
}

export default Tasks;
