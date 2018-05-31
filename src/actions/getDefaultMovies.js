import { GET_DEFAULT_MOVIES } from './actionsType';

const getDefaultMovies = (params) => dispatch => {
  fetch(`http://react-cdp-api.herokuapp.com/movies?${params}`)
    .then(res => res.json())
    .then(res => dispatch({type:GET_DEFAULT_MOVIES,payload:res}))
    .catch('error')
}

export default getDefaultMovies;
