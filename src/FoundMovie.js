import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

// actions
import getMovieById from './actions/getMovieById';
import getMovieByGenre from './actions/getMovieByGenre';

// components 
import MoviePanel from './components/MoviePanel';
import MovieListGenre from './components/MovieListGenre';

class FoundMovie extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('==================', this.props.match)
    const id = this.props.match.params.id;
    this.props.getMovieById(id);
  }
  
  render() {
    if(this.props.movieInfo.movieById) {
      const movieInfo = this.props.movieInfo.movieById;

      return (
        <Fragment>
          <MoviePanel movieInfo = {movieInfo} />
          <MovieListGenre />
        </Fragment>
      )
    }
    return null;
  }
}

export default connect(
  state => ({
    movieInfo: state.getMovieById,
  }),
  dispatch => ({
    getMovieById: (id) => dispatch(getMovieById(id)),
    getMovieByGenre: (genre) => dispatch(getMovieByGenre(genre)),
  })
)(FoundMovie)