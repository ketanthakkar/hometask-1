import React, { Component } from 'react';
import './SearchPanel.css';
import SearchInput from '../SearchInput';
import Button from '../Button';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'release_data',
            searchBy: 'title',
            search:'',
        }
    }

    updateQuery = (key, value) => {
        let params = this.props.params;
        params[key] = value;
        let arrParams = Object.entries(params).map(item => item.join('='));
        const query = arrParams.length > 1 ? `?${arrParams.join('&')}` : `?${arrParams[0]}`;
        history.pushState(null, null, query);
    }

    handleChangeInput = (e) => {
        this.setState({
            search:e.target.value,
        })
    }

    handleSearch = () => {
        let params = this.props.params;
        params.search = this.state.search;
        if (this.state.search !== "") {
           this.updateQuery('search', this.state.search);
        }
        
    }
    render() {
        const { params } = this.props;

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
                        active = { params.searchBy }
                        handleClick = {() => this.updateQuery('searchBy', 'title')} 
                />
                <Button name = 'genre' 
                        id = 'genres'
                        active = { params.searchBy }
                        handleClick = {() => this.updateQuery('searchBy', 'genres')}
                />
                <Button 
                    name = 'search' 
                    active 
                    handleClick = {this.handleSearch}
                />
                <div>
                    <span className = 'searchPanel-title'> sort by </span>
                    <Button 
                        name = 'release date' 
                        id = 'release_date'
                        active = { params.sortBy }
                        handleClick = {() => this.updateQuery('sortBy', 'release_date')}
                    />
                    <Button 
                        name = 'rating' 
                        id = 'vote_average'
                        active = { params.sortBy }
                        handleClick = {() => this.updateQuery('sortBy', 'vote_average')}
                    />
                </div>
                <div>
                    <span className = 'searchPanel-title'> sort order </span>
                    <Button 
                        name = 'desc' 
                        id = 'desc'
                        active = { params.sortOrder }
                        handleClick = {() => this.updateQuery('sortOrder', 'desc')}
                    />
                    <Button 
                        name = 'asc' 
                        active = {'asc'}
                        id = 'asc'
                        active = { params.sortOrder }
                        handleClick = {() => this.updateQuery('sortOrder', 'asc')}
                    />
                </div>
            </div>
        )
    }
}

export default SearchPanel;