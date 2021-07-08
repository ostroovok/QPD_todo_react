import { func } from 'prop-types';
import React from 'react';
import styled from  "styled-components";
import './navbar.css'

const Brand: React.FC<{text: string}> = (text) => {
    return (
        <div className="header-logo ">
            {text.text}
        </div>
    );
};

const LinkListBar: React.FC<{text: string}> = () => {
    return (
        <div>
            
        </div>
    );
};

const AddButton: React.FC<{text: string}> = () => {
    return (
        <div>
            
        </div>
    );
};

function NavigationBar(){
    return(
        <div className="header">
            <Brand text='ToDo List'/>
            
            <AddButton text='123'/>
        </div>
    );
}

export default NavigationBar;