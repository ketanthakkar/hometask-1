import { 
  CLEAN_MOVIE_BY_GENRE,
  GET_MOVIE_BY_GENRE 
} from '../actions/actionsType';

const initialState = {};

const movieByGenre = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_GENRE:
      return { ...state, genreMovie:action.payload};
      break;
    case CLEAN_MOVIE_BY_GENRE:
      return {};
      break;
    default:
      return state;

  }
}

export default movieByGenre;
