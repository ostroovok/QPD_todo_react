import React from 'react';
import './style-buttons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function ChangeButton(){
    return(
        <span>
            <button className="button1 button2">
                <FontAwesomeIcon icon={faPen} color="#3F72AF" size="lg"/>
            </button>
        </span>
    );
}

export default ChangeButton;