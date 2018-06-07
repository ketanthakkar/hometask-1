import React from 'react';
import mockData from '../../mockData';
import MovieItem from '../MovieItem';
import './MovieListItems.css';

const MovieListItems = () => {
    const data = this.props.data.map(item => {
        return (
            <MovieItem url = {item.poster_path}
                       name = {item.title}
                       date = {item.release_date}
                       genre = {item.genres}
                       key = {item.id}
            />
        )
    })
    return (
        <div className = 'movieList-wrapper'>
            {data}
        </div>
    );
}

export default MovieListItems;
