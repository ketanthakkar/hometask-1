// libs
import React , {Component, Fragment} from 'react';

// smth
import mockData from './mockData';

// components
import MoviePanel from './components/MoviePanel';
import MovieListItems from './components/MovieListItems';
import ErrorBoundary from './components/ErrorBoundary';
import SearchPanel from './components/SearchPanel';
// styles
import './styleModules/App.css';

export default class App extends React.Component {

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