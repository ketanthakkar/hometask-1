import React from 'react';
import Image from './Image';
import '../styleModules/MovieItem.css';

const MovieItem = ({url, name, date, genre}) => {
    return (
        <div className = 'movieItem-wrapper'>
            <Image src = {url} alt = {name}/>
            <span>{name}</span><br/>
            <span>{date}</span><br/>
            <span>{genre.join(', ')}</span>
        </div>
    );
}

export default MovieItem;
