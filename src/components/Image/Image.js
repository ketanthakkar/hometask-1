import React from 'react';
import './Image.css';

const Image = ({src, alt}) => {
    return <img src = {src} alt = {alt} className = 'image__small'/>
}

export default Image;
