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

    componentWillMount() {
        this.props.fetchUsers();
        this.props.fetchDefaultMovie();
    }


    render() {
        let data = this.props.users.map(item => <p key = {item.id}> {item.name}</p>);
        return (
            <div className = 'app-wrapper'>
                {data}
            </div>
        );
    }
}