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
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    updateQuery(query, value) {
        let {params, pathname} = this.props;
        if(params.get(query)) {
            params.set(query, value);
            window.location.replace( `#${pathname}?${params}`, null)
        } else {
            params.append(query,value);
            window.location.replace( `#${pathname}?${params}`, null)
        }
    }

    componentDidMount() {
        const { params } = this.props;

        if(params.get('search')) {
            this.setState({
                search: params.get('search'),
            })
        }
    }

    handleChangeInput(e) {
        const { params, pathname} = this.props;
        this.setState({
            search:e.target.value,
        })
        if(!e.target.value) {
            params.delete('search');
            window.location.replace( `#${pathname}?${params}`, null)
        }
    }

    handleSearch() {
        const {params} = this.props;
        if(this.state.search) {
            this.updateQuery('search',this.state.search);
        }
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
                        active = {this.props.params.get('searchBy')}
                        handleClick = {() => this.updateQuery('searchBy', 'title')} 
                />
                <Button name = 'genre' 
                        id = 'genres'
                        active = {this.props.params.get('searchBy')}
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
                        active = {this.props.params.get('sortBy')}
                        handleClick = {() => this.updateQuery('sortBy', 'release_date')}
                    />
                    <Button 
                        name = 'rating' 
                        active = {this.props.params.get('sortBy')}
                        id = 'vote_average'
                        handleClick = {() => this.updateQuery('sortBy', 'vote_average')}
                    />
                </div>
                <div>
                    <span className = 'searchPanel-title'> sort order </span>
                    <Button 
                        name = 'desc' 
                        id = 'desc'
                        active = {this.props.params.get('sortOrder')}
                        handleClick = {() => this.updateQuery('sortOrder', 'desc')}
                    />
                    <Button 
                        name = 'asc' 
                        active = {this.props.params.get('sortOrder')}
                        id = 'asc'
                        handleClick = {() => this.updateQuery('sortOrder', 'asc')}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      searchMovie: (params) => dispatch(searchMovie(params)),
    }
}
export default connect(
    null,
    mapDispatchToProps
)(SearchPanel);