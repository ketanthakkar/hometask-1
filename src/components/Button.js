import React, { Component } from 'react';
import '../styleModules/Button.css';

const Button = ({name, active, handleClick, id}) => {
    return (
        <button 
            className = {`button ${active === id ? 'button--active' : 'button--unactive'}`} 
            onClick = {handleClick}
            id = {id}
        >
            {name} 
        </button>
    );
}
export default Button;
