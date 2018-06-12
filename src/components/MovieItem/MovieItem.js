import React from 'react';
import Image from '../Image';
import './MovieItem.css';

import { Link } from 'react-router-dom';

const MovieItem = ({url, name, date, genre, id}) => {
    return (
        <Link to ={ `/search/${id}`}>
        <div className = 'movieItem-wrapper'>
            <Image src = {url} alt = {name}/>
            <span>{name}</span><br/>
            <span>{date}</span><br/>
            <span>{genre.join(', ')}</span>
        </div>
        </Link>
    );
}

export default MovieItem;
