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
  
  componentDidUpdate() {
    const id = this.props.match.params.id;
    this.props.getMovieById(id);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieById(id);
  }
  
  render() {
      return (
        <Fragment>
          <MoviePanel/>
          <MovieListGenre />
        </Fragment>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieById: (id) => dispatch(getMovieById(id)),
    getMovieByGenre: (genre) => dispatch(getMovieByGenre(genre)),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(FoundMovie)