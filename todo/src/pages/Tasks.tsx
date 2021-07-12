import React from 'react';
import Header from '../components/NavigationMenu';
import ItemList from '../components/ItemList';
import {CreateButton} from '../componentsUI/CreateButton';
import './style-pages.css';

function Tasks(){
    return (
        <div>
            <div className="actionmenu">
                <CreateButton {...{title: 'Добавить задачу'}} />
            </div>
            <Header />
            <ItemList />
        </div>
    );
}

export default Tasks;