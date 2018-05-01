import React, { Component } from 'react';
import '../styleModules/Button.css';

const Button = ({name, active, handleClick}) => {
    return (
        <button className = {active ? 'button__active' : 'button__unactive'} onClick = {handleClick}>
            {name} 
        </button>
    );
}
export default Button;
