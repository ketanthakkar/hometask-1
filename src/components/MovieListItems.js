import React, {Component} from 'react';
import mockData from '../mockData';
import MovieItem from './MovieItem';
import '../styleModules/MovieListItems.css';
import { connect } from 'react-redux';
import getDefaultMovies from '../actions/getDefaultMovies';

class MovieListItems extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const data = this.props.movies.data.map(item => {
        return (
            <MovieItem url = {item.poster_path}
                       name = {item.title}
                       date = {item.release_date}
                       genre = {item.genres}
                       key = {item.id}
            />
        )
    })
    return (
        <div className = 'movieList-wrapper'>
            {data}
        </div>
    );
  }
}
export default connect(
    state => ({
        movies: state.getDefaultMovies
    }),
    dispatch => ({
        getMovies: () => dispatch(getDefaultMovies()),
    })
)(MovieListItems);
