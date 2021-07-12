import React from 'react';
import './style-buttons.css'

interface ICreateButtonProps{
    title: string;
}

export const CreateButton:React.FC<ICreateButtonProps> = (props) =>{
    return (
        <button className="button button1">{props.title}</button>
    )
}