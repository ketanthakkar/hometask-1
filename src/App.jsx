import React , {Component, Fragment} from 'react';
import SearchPanel from './components/SearchPanel';
import mockData from './mockData';
import MoviePanel from './components/MoviePanel';
import MovieListItems from './components/MovieListItems';
import ErrorBoundary from './components/ErrorBoundary';

import './styleModules/App.css';

export default class App extends React.Component {

    render() {
        return (
            <div className = 'app-wrapper'>
                <MoviePanel />
                <ErrorBoundary>
                    <MovieListItems />
                </ErrorBoundary>
            </div>
        );
    }
}