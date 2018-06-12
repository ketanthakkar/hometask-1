// libs
import React , {Component, Fragment} from 'react';

// smth
import mockData from '../../mockData';

// components
import MoviePanel from '../../components/MoviePanel';
import MovieListItems from '../../components/MovieListItems';
import ErrorBoundary from '../../components/ErrorBoundary';
import SearchPanel from '../../components/SearchPanel';
// styles
import './HomePage.css';

export default class HomePage extends Component {

    searchParse = (string) => {
        if (string === '') return {};
        let arr = string.slice(1).split('&');
        return arr.reduce((acc, curr) => {
            let item = curr.split('=');
            return {
                ...acc,
                [item[0]]:item[1],
            }
        }, {})
    }

    componentWillMount() {
        console.log('updata +++++++++++',this.props.location.search);
        this.props.fetchDefaultMovie(this.props.location.search);
    }

    render() {
        const { movies, location } = this.props;
        const params = this.searchParse(location.search);
        console.log(params);
        return (
            <div className = 'app-wrapper'>
            <button onClick = {() => history.pushState(null,null, '/kldsajf;lkdsjf')}>
            push
            </button>
                <SearchPanel  params = {params}/>
                <ErrorBoundary>
                    <MovieListItems data = {movies.data} />
                </ErrorBoundary>
            </div>
        );
    }
}