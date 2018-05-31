import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import getMovieByGenre from '../actions/getMovieByGenre';

// styles
import '../styleModules/MovieListItems.css';

// components
import MovieItem from './MovieItem';

class MovieListGenre extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;
    let data;

    if (movie.genreMovie) {
      data = movie.genreMovie.data.map(item => {
        return (
        <Link to = {`/search/${item.id}`}  key = {item.id}>
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
        movie: state.movieByGenre,
    }),
    dispatch => ({
        getMovies: () => dispatch(getDefaultMovies()),
    })
)(MovieListGenre);
