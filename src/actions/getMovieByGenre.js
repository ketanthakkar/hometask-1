import { GET_MOVIE_BY_GENRE } from './actionsType';

const url = 'http://react-cdp-api.herokuapp.com/movies?sortOrder=desc&searchBy=genres'
const getMovieByGenre = (genre) => dispatch => {
  fetch(`${url}&search=${genre}`)
    .then(res => res.json())
    .then(res => dispatch({type:GET_MOVIE_BY_GENRE,payload:res}))
    .catch('error')
}

export default getMovieByGenre;
