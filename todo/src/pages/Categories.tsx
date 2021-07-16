import { useState } from "react";
import Header from "../components/Header/NavigationMenu";
import { CreateButton } from "../components/componentsUI/CreateButton";
import { useSelector } from "react-redux";
import ItemList from "../components/ItemList/ItemList";
import { handleInputChange } from "./handleChange";
import "./style-pages.css";
import "./style-fieldset.css";
import { RootState } from "../store/store";

function Categories() {

  const todoListdata = useSelector(
    (state: RootState) => state.todos.categories.list
  );

  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleTitleChange = handleInputChange;
  const handleDecriptionChange = handleInputChange;

  return (
    <div>
      <div className="actionmenu">
        <CreateButton
          buttonTitle="Добавить категорию"
          modalTitle="Создание категории"
          children={
            <>
              <form>
                <div>
                  <fieldset className="name2">
                    <legend>Имя</legend>
                    <input
                      placeholder="Введите имя задачи"
                      value={itemTitle}
                      onInput={handleTitleChange(setItemTitle)}
                    ></input>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="description">
                    <legend>Описание</legend>
                    <input
                      placeholder="Введите описание задачи"
                      value={itemDescription}
                      onInput={handleDecriptionChange(setItemDescription)}
                    ></input>
                  </fieldset>
                </div>
              </form>
            </>
          }
          content={{
            title: itemTitle,
            attachment: "",
            description: itemDescription,
            type: 'category'
          }}
        />
      </div>
      <Header />
      <ItemList list={todoListdata} />
    </div>
  );
}

export default Categories;
