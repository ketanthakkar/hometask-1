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
    componentWillUpdate() {
        console.log('----- app -------');
    }
    render() {
        console.log(this.props.location);
        const params = new URLSearchParams(this.props.location.search);
        params.append('sortOrder','desc');
        return (
            <div className = 'app-wrapper'>
                
                <ErrorBoundary>
                    <MovieListItems />
                </ErrorBoundary>
            </div>
        );
    }
}