import { GET_DEFAULT_MOVIES } from './actionsType';

const getDefaultMovies = () => dispatch => {
  fetch('http://react-cdp-api.herokuapp.com/movies')
    .then(res => res.json())
    .then(res => dispatch({type:GET_DEFAULT_MOVIES,payload:res}))
    .catch('error')
}

export default getDefaultMovies;
