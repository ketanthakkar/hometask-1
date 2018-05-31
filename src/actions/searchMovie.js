import { SEARCH_MOVIE } from './actionsType';


const searchMovie = (params) => dispatch => {
  fetch(`http://react-cdp-api.herokuapp.com/movies?${params}`)
    .then(res => res.json())
    .then(res => dispatch({type:SEARCH_MOVIE,payload:res}))
    .catch('error')
}

export default searchMovie;
