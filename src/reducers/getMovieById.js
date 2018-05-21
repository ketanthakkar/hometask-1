import { GET_MOVIE_BY_ID, CLEAN_MOVIE_BY_ID } from '../actions/actionsType';

const initialState = {};

const getMovieById = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return { ...state, movieById:action.payload};
      break;
    case CLEAN_MOVIE_BY_ID:
      return {};
      break;
    default:
      return state;

  }
}

export default getMovieById;
