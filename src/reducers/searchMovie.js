import { SEARCH_MOVIE, CLEAN_SEARCH_MOVIE } from '../actions/actionsType';

const initialState = {};

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, searchMovie:action.payload};
      break;
    case CLEAN_SEARCH_MOVIE:
      return {}
      break;
    default:
      return state;

  }
}

export default searchMovie;