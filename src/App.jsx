// libs
import React , {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
// smth
import mockData from './mockData';

// actions
import searchMovie from './actions/searchMovie';

// components
import MoviePanel from './components/MoviePanel';
import MovieListItems from './components/MovieListItems';
import ErrorBoundary from './components/ErrorBoundary';
import SearchPanel from './components/SearchPanel';
// styles
import './styleModules/App.css';

class App extends Component {

    componentDidUpdate() {
        const params = new URLSearchParams(this.props.location.search);
        this.props.searchMovie(params);
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        this.props.searchMovie(params);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.location.search !== nextProps.location.search) {
            return true;
        }
        return false;
    }

    render() {
        const history = createHistory();
        const { pathname, search } = this.props.location;
        
        const params = new URLSearchParams(search);

        return (
            <div className = 'app-wrapper'>
                <SearchPanel params = {params} pathname = {pathname} history = {history}/>
                <ErrorBoundary>
                    <MovieListItems />
                </ErrorBoundary>
            </div>
        );
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
)(App);