import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import getMovieByGenre from '../actions/getMovieByGenre';
import { CLEAN_MOVIE_BY_GENRE } from '../actions/actionsType';

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

const mapStateToProps = state => {
  return {
    movie: state.movieByGenre,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getDefaultMovies()),
    cleanMovie: () => dispatch({type:CLEAN_MOVIE_BY_GENRE}),
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieListGenre);
