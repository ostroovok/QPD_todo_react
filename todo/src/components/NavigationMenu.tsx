import * as React from 'react';
import './navbar.css'

interface IHeaderMenuElement{
    title: string;
    link: string;
}

const HeaderMenuElement:React.FC<IHeaderMenuElement> = (props) =>{
    return (
        <a href={props.link}>
            {props.title}
        </a>
    )
}

const Brand: React.FC<{text: string}> = (props) => {
    return (
        <div className="header-logo ">
            {props.text}
        </div>
    );
};

function Header(){
    return(
        <div className="header header-shadow">
            <Brand text='ToDo List'/>
            <div className="actionmenu">
                <HeaderMenuElement {...{title: 'Добавить задачу', link: '321'}} />
            </div>
            <div className="scrollmenu">
                <HeaderMenuElement {...{title: 'Задачи', link: '/tasks'}}/>
                |
                <HeaderMenuElement {...{title: 'Категории', link: '/categories'}}/>
            </div>
        </div>
    );
}

export default Header;