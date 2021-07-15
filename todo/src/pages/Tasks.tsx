import React, { useState } from 'react';
import Header from "../components/Header/NavigationMenu";
import ItemList from "../components/ItemList/ItemList";
import { CreateButton } from "../components/componentsUI/CreateButton";
import { useDispatch, useSelector } from 'react-redux';
import "./style-pages.css";
import "./style-fieldset.css";

import { IListElement } from "../components/ItemList/IListElement";
import { RootState, setStore } from '../store/store';

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
            <option value="2">Категория2</option>
            <option value="3">Категория3</option>
            <option value="4">Категория4</option>
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
  //const list = useSelector((state: RootState) => state.todos.tasks)

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
