import { GET_MOVIE_BY_ID, CLEAN_MOVIE_BY_ID } from '../../actions/actionsType';
import getMovieById from '../getMovieById';

describe('get movie by id reducer test', () => {
  it('should return initial state', () => {
    expect(getMovieById(undefined, {})).toEqual({})
  })

  it('should handle GET_MOVIE_BY_ID', () => {
    expect(getMovieById({}, {
      type:GET_MOVIE_BY_ID,
      payload: {
        test:'test reducer'
      }
    })).toEqual({
      movieById:{
        test:'test reducer'
      }
    })
  })

  it('should handle CLEAN_MOVIE_BY_ID', () => {
    expect(getMovieById({}, {
      type: CLEAN_MOVIE_BY_ID,
    })).toEqual({})
  })
  
})