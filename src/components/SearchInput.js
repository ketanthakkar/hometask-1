import React from 'react';
import '../styleModules/SearchInput.css';

const SearchInput = ({handleChange, value}) => {
    return (
        <input 
            type = 'text'
            className = 'searchInput'
            value = {value}
            onChange = {handleChange}
        />
    )
}

export default SearchInput;
