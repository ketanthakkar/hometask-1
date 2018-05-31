import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import MovieItem from './MovieItem';

// styles
import '../styleModules/MovieListItems.css';

// actions
import getDefaultMovies from '../actions/getDefaultMovies';
import getMovieById from '../actions/getMovieById';


class MovieListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchMovie } = this.props;
    let data;
    if (searchMovie.searchMovie) {
      data = searchMovie.searchMovie.data.map(item => {
        return (
        <Link to = {{pathname:`/search/${item.id}`, state:item.genres[0]}}  key = {item.id}>
            <MovieItem 
                    url = {item.poster_path}
                    name = {item.title}
                    date = {item.release_date}
                    genre = {item.genres}
            />
        </Link>
        )
      })  
    } 
    return (
        <div className = 'movieList-wrapper'>
            {data}
        </div>
    );
  }
}
export default connect(
    state => ({
        movies: state.getDefaultMovies,
        searchMovie: state.searchMovie,
    }),
    dispatch => ({
        getMovies: () => dispatch(getDefaultMovies()),
        getMovieById: (id) => dispatch(getMovieById(id)),
    })
)(MovieListItems);
