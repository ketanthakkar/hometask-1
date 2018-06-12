import React from 'react';
import mockData from '../../mockData';
import MovieItem from '../MovieItem';
import './MovieListItems.css';

const MovieListItems = ({data}) => {
    const info = data.map(item => {
        return (
            <MovieItem url = {item.poster_path}
                       name = {item.title}
                       date = {item.release_date}
                       genre = {item.genres}
                       key = {item.id}
                       id = {item.id}
            />
        )
    })
    return (
        <div className = 'movieList-wrapper'>
            {info}
        </div>
    );
}

export default MovieListItems;
