import { func } from 'prop-types';
import React from 'react';
import styled from  "styled-components";
import './navbar.css'

interface Title{
    text: string;
    route: string;
}

const TitleField: React.FC<Title> = () =>{
    return (
    <div>
        
    </div>
    )
};


function NavigationBar(){
    return(
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    );
}

export default NavigationBar;