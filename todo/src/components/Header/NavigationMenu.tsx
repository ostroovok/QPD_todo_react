import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

interface IHeaderMenuElement{
    title: string;
    link: string;
}

const HeaderMenuElement:React.FC<IHeaderMenuElement> = (props) =>{
    return (
        <span className="navLinks">
            <NavLink to={props.link}>{props.title}</NavLink>
        </span>
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

            <div className="scrollmenu">
                <span>
                    <HeaderMenuElement {...{title: 'Задачи', link: '/tasks'}}/>
                </span>
                |
                <span>
                    <HeaderMenuElement {...{title: 'Категории', link: '/categories'}}/>
                </span>
            </div>
        </div>
    );
}

export default Header;