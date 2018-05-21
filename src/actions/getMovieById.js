import { GET_MOVIE_BY_ID } from './actionsType';

const getMovieById = (id) => dispatch => {
  fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => res.json())
    .then(res => dispatch({type:GET_MOVIE_BY_ID, payload:res}))
    .catch('error')
}

export default getMovieById;
