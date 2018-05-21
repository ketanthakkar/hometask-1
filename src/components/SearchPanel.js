import React, { Component } from 'react';
import '../styleModules/SearchPanel.css';
import SearchInput from './SearchInput';
import Button from './Button';
import { connect } from 'react-redux';
import searchMovie from '../actions/searchMovie';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'release_data',
            searchBy: 'title',
            search:'',
        }

    }

    makeParams = () => {
        let params = Object.entries(this.state);
        console.log(params)
        let arr = params.map(item => item.join('='));
        return arr.join('&');
    }
    
    handleClick = (e) => {
        this.setState({
            searchBy:e.target.id,
        })
    }

    handleSortBy = (e) => {
        this.setState({
            sortBy:e.target.id
        });
    }

    handleSearch = () => {
        const params = this.makeParams();
        this.props.searchMovie(params);
    }

    handleChangeInput = (e) => {
        this.setState({
            search:e.target.value,
        })
    }

    componentDidUpdate() {
        console.log('component to update', this.makeParams());
    }

    render() {
        return (
            <div className = 'searchPanel-wrapper'>
                <span className = 'searchPanel-title'>Find your movie</span>
                <SearchInput 
                    value = {this.state.search}
                    handleChange = {this.handleChangeInput}
                />

                <span className = 'searchPanel-title'> Search by </span>
                <Button name = 'title' 
                        id = 'title'
                        active = {this.state.searchBy}
                        handleClick = {this.handleClick} 
                />
                <Button name = 'genre' 
                        id = 'genres'
                        active = {this.state.searchBy}
                        handleClick = {this.handleClick}
                />
                <Button 
                    name = 'search' 
                    active 
                    handleClick = {this.handleSearch}
                />
                <div>
                    <span className = 'searchPanel-title'> sort by </span>
                    <Button 
                        name = 'release data' 
                        id = 'release_data'
                        active = {this.state.sortBy}
                        handleClick = {this.handleSortBy}
                    />
                    <Button 
                        name = 'rating' 
                        active = {this.state.sortBy}
                        id = 'vote_average'
                        handleClick = {this.handleSortBy}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        searchMovie: state.searchMovie,
    }),
    dispatch => ({
        searchMovie: (params) => dispatch(searchMovie(params)),
    })
)(SearchPanel);