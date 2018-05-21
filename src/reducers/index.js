import {combineReducers} from 'redux';
import getDefaultMovies from './getDefaultMovies';
import getMovieById from './getMovieById';
import searchMovie from './searchMovie';

export default combineReducers({
  getMovieById,
  getDefaultMovies,
  searchMovie,
});