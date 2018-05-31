import { SEARCH_MOVIE } from '../../actions/actionsType';
import searchMovie from '../searchMovie';


describe('search movie reducer test', () => {
  it('should return initial state', () => {
    expect(searchMovie(undefined, {})).toEqual({})
  })

  it('should handle SEARCH_MOVIE', () => {
    expect(searchMovie({}, {
      type:SEARCH_MOVIE,
      payload: {
        test:'test reducer'
      }
    })).toEqual({
      searchMovie:{
        test:'test reducer'
      }
    })
  })
  
})