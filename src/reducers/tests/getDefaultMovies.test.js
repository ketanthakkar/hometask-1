import getDefaultMovies from '../getDefaultMovies';
import { GET_DEFAULT_MOVIES, CLEAN_MOVIES } from '../../actions/actionsType';
import getMovieByGenre from '../../actions/getMovieByGenre';

describe('default movie reducer test', () => {
  it('should return initial state', () => {
    expect(getDefaultMovies(undefined, {})).toEqual({})
  })

  it('should handle GET_DEFAULT_MOVIES', () => {
    expect(getDefaultMovies({}, {
      type:GET_DEFAULT_MOVIES,
      payload: {
        test:'test reducer'
      }
    })).toEqual({
      defaultMovies:{
        test:'test reducer'
      }
    })
  })

  it('should handle CLEAN_MOVIES', () => {
    expect(getDefaultMovies({}, {
      type: CLEAN_MOVIES,
    })).toEqual({})
  })
  
})