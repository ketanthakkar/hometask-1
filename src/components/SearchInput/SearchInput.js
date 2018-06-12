import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, handleChange }) => {
    return (
        <input 
            type = 'text' 
            className = 'searchInput' 
            value = {value}
            onChange = {(e) => handleChange(e)}
        />
    )
}

export default SearchInput;
