const initialState = {};

const getDefaultMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DEFAULT_MOVIES':
      return { ...state, defaultMovies:action.payload};
      break;
    case 'CLEAN_MOVIES':
      return {};
      break;
    default:
      return state;

  }
}

export default getDefaultMovies;
