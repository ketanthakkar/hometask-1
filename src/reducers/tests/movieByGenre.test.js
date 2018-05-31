import { GET_MOVIE_BY_GENRE, CLEAN_MOVIE_BY_GENRE } from '../../actions/actionsType';
import movieByGenre from '../movieByGenre';

describe('get movie by genre reducer test', () => {
  it('should return initial state', () => {
    expect(movieByGenre(undefined, {})).toEqual({})
  })

  it('should handle GET_MOVIE_BY_GENRE', () => {
    expect(movieByGenre({}, {
      type:GET_MOVIE_BY_GENRE,
      payload: {
        test:'test reducer'
      }
    })).toEqual({
      genreMovie:{
        test:'test reducer'
      }
    })
  })

  it('should handle CLEAN_MOVIE_BY_GENRE', () => {
    expect(movieByGenre({}, {
      type: CLEAN_MOVIE_BY_GENRE,
    })).toEqual({})
  })
  
})