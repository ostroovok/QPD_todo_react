import React from 'react';
import Header from '../components/NavigationMenu';
import {CreateButton} from '../componentsUI/CreateButton';
import './style-pages.css';


function Categories(){
    return (
        <div>
            <div className="actionmenu">
                <CreateButton {...{title: 'Добавить Категорию'}} />
            </div>
            <Header />
        </div>
    );
}

export default Categories;