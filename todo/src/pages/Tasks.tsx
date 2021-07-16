import React, { useState } from "react";
import Header from "../components/Header/NavigationMenu";
import ItemList from "../components/ItemList/ItemList";
import { CreateButton } from "../components/componentsUI/CreateButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { handleInputChange, handleSelectChange } from "./handleChange";
import "./style-pages.css";
import "./style-fieldset.css";
  
const Tasks: React.FC = () => {
  
  const todoListdata = useSelector(
    (state: RootState) => state.todos.tasks.list
  );

  const [itemTitle, setItemTitle] = useState("");
  const [itemAttachment, setItemAttachment] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleTitleChange = handleInputChange;
  const handleDecriptionChange = handleInputChange;
  const handleAttachementChange = handleSelectChange;

  return (
    <div>
      <div className="actionmenu">
        <CreateButton
          buttonTitle="Добавить задачу"
          modalTitle="Создание задачи"
          children={
            <>
              <form>
                <div>
                  <fieldset className="name1">
                    <legend>Имя</legend>
                    <input
                      placeholder="Введите имя задачи"
                      value={itemTitle}
                      onInput={handleTitleChange(setItemTitle)}
                    ></input>
                  </fieldset>
                  <span>
                    <fieldset className="category">
                      <legend>Категория</legend>
                      <select
                        value={itemAttachment}
                        onInput={handleAttachementChange(setItemAttachment)}
                      >
                        <option value="" selected>
                          Выберите категорию
                        </option>
                        <option value="Категория2">Категория2</option>
                        <option value="Категория3">Категория3</option>
                        <option value="Категория4">Категория4</option>
                      </select>
                    </fieldset>
                  </span>
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
            attachment: itemAttachment,
            description: itemDescription,
            type: 'task'
          }}
        />
      </div>
      <Header />
      <ItemList list={todoListdata} />
    </div>
  );
};

export default Tasks;
