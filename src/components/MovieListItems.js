import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import {CLEAN_SEARCH_MOVIE} from '../actions/actionsType';

// components
import MovieItem from './MovieItem';

// styles
import '../styleModules/MovieListItems.css';

// actions
import getDefaultMovies from '../actions/getDefaultMovies';
import getMovieById from '../actions/getMovieById';


class MovieListItems extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
      this.props.clear();
  }
  render() {
    const { searchMovie } = this.props;
    let data;
    if (searchMovie.searchMovie) {
      if(searchMovie.searchMovie.data.length === 0) {
        data = <h1> Movie not founnd </h1>
      } else {
        data = searchMovie.searchMovie.data.map(item => {
            return (
            <Link to = {{pathname:`/search/${item.id}`, state:item.genres[0]}}  key = {item.id}>
                <MovieItem 
                        url = {item.poster_path}
                        name = {item.title}
                        date = {item.release_date}
                        genre = {item.genres}
                />
            </Link>
            )
        }) 
        } 
    } 
    return (
        <div className = 'movieList-wrapper'>
            {data}
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        searchMovie: state.searchMovie,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clear: () => dispatch({type:CLEAN_SEARCH_MOVIE}),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieListItems);
