import {combineReducers} from 'redux';
import getDefaultMovies from './getDefaultMovies';
import getMovieById from './getMovieById';
import searchMovie from './searchMovie';
import movieByGenre from './MovieByGenre';

export default combineReducers({
  getMovieById,
  getDefaultMovies,
  searchMovie,
  movieByGenre,
});