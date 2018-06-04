import { GET_MOVIE_BY_ID, GET_MOVIE_BY_GENRE} from './actionsType';

const url = 'http://react-cdp-api.herokuapp.com/movies?sortOrder=desc&searchBy=genres'

const getMovieById = (id) => dispatch => {
  fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => res.json())
    .then(res => {
      dispatch({type:GET_MOVIE_BY_ID, payload:res})
      return res.genres;
    })
    .then(res => fetch(`${url}/search=${res[0]}`))
    .then(res => res.json())
    .then(res => dispatch({type:GET_MOVIE_BY_GENRE,payload:res}))
    .catch('error')
}

export default getMovieById;
