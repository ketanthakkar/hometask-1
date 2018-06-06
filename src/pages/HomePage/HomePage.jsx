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

    render() {
        return (
            <div className = 'app-wrapper'>
                <SearchPanel />
                <ErrorBoundary>
                    <MovieListItems />
                </ErrorBoundary>
            </div>
        );
    }
}