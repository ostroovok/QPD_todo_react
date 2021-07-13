import React from 'react';
import Header from '../components/Header/NavigationMenu';
import {CreateButton} from '../components/componentsUI/CreateButton';
import './style-pages.css';
import { IListElement } from '../components/ItemList/IListElement';
import ItemList from '../components/ItemList/ItemList';


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
            <CreateButton {...{ title: "Добавить Категорию" }} />
          </div>
          <Header />
          <ItemList list={list} />
        </div>
      );
    }

export default Categories;