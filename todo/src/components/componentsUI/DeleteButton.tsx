import React from 'react';
import './style-buttons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeleteButton(){
    return(
        <span>
            <button className="button1 button2">
                <FontAwesomeIcon icon={faTrash} color="#3F72AF" size="lg"/>
            </button>
        </span>
    );
}

export default DeleteButton;