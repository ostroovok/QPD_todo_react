import React from 'react';
import Header from '../components/Header/NavigationMenu';
import {CreateButton} from '../components/componentsUI/CreateButton';
import './style-pages.css';
import './style-fieldset.css';
import { IListElement } from '../components/ItemList/IListElement';
import ItemList from '../components/ItemList/ItemList';

const element = (
  <>
    <form>
      <div>
        <fieldset className="name2">
          <legend>Имя</legend>
          <input placeholder="Введите имя задачи"></input>
        </fieldset>
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

function Categories(){
    const list: IListElement[] = [
        { title: "Категория1", description: "Описание"},
        { title: "Категория2", description: "Описание"},
        { title: "Категория13", description: "Описание"},
        { title: "Категория11", description: "Описание"},
        { title: "Категория1", description: "Описание"},
        { title: "Категория1", description: "Описание"},
        { title: "Категория2", description: "Описание"},
        { title: "Категория2", description: "Описание"},
      ];
    
      return (
        <div>
          <div className="actionmenu">
          <CreateButton buttonTitle = "Добавить категорию" title="Создание категории" children={element}/>
          </div>
          <Header />
          <ItemList list={list} />
        </div>
      );
    }

export default Categories;