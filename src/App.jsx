import React , {Component, Fragment} from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

export default class App extends React.Component {

    render() {
        console.log('---------------',process.env.NODE_ENV)
        return (
            <Fragment>
                <FirstComponent />
                <SecondComponent />
            </Fragment>
        )
    }
}