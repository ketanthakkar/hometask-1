import React, { Component } from 'react';
import { connect } from 'react-redux';

// styles
import '../styleModules/SearchPanel.css';

// components
import SearchInput from './SearchInput';
import Button from './Button';

// actions
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

    componentDidMount() {
        const {params} = this.props;

        if(params.get('search')) {
            this.setState({
                search: params.get('search')
            })
        }
        this.props.searchMovie(params);
    }

    handleClick = (e) => {
        let {params} = this.props;
        if(params.get('searchBy')) {
            params.set('searchBy', e.target.id);
            history.pushState(null, null, `#/movie?${params}`);
        } else {
            params.append('searchBy',e.target.id);
            history.pushState(null, null, `#/movie?${params}`);
        }
        this.props.searchMovie(params);
    }
    
    handleSortBy = (e) => {
        let {params} = this.props;
        if(params.get('sortBy')) {
            params.set('sortBy', e.target.id);
            history.pushState(null, null, `#/movie?${params}`);
        } else {
            params.append('sortBy',e.target.id);
            history.pushState(null, null, `#/movie?${params}`);
        }
        this.props.searchMovie(params);
    }

    handleSearch = () => {
        let {params} = this.props;
        if(params.get('search')) {
            params.set('search', this.state.search);
            history.pushState(null, null, `#/movie?${params}`);
        } else {
            params.append('search',this.state.search);
            history.pushState(null, null, `#/movie?${params}`);
        }
        this.props.searchMovie(params);
    }

    handleChangeInput = (e) => {
        this.setState({
            search:e.target.value,
        })
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
                        active = {this.props.params.get('sortBy')}
                        handleClick = {this.handleSortBy}
                    />
                    <Button 
                        name = 'rating' 
                        active = {this.props.params.get('sortBy')}
                        id = 'vote_average'
                        handleClick = {this.handleSortBy}
                    />
                </div>
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
    searchMovie: state.searchMovie,
    }
}
const mapDispatchToProps = dispatch => {
    return {
      searchMovie: (params) => dispatch(searchMovie(params)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel);