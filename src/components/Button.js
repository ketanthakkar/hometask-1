import React, { Component } from 'react';
import '../styleModules/Button.css';

const Button = ({name, active, handleClick}) => {
    return (
        <button className = {`button ${active ? 'button--active' : 'button--unactive'}`} onClick = {handleClick}>
            {name} 
        </button>
    );
}
export default Button;
