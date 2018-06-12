import React, { Component, Fragment } from 'react';

import MoviePanel from '../../components/MoviePanel';


class SearchPage extends Component {

  componentWillMount() {
    this.props.movieById(this.props.match.params.id);
}

  render() {

    const {
      poster_path,
      title,
      overview,
      tagline,
      vote_average
    } = this.props.movies;
    return (
      <Fragment>
        <h1> search panel</h1>
        <MoviePanel 
          title = {title}
          poster_path = {poster_path}
          overview = {overview}
          tagline = {tagline}
          vote_average = {vote_average}
        />
      </Fragment>
    )
  }
}

export default SearchPage;
