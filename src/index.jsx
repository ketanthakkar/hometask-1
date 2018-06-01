// libs
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// tools
import {composeWithDevTools} from "redux-devtools-extension";
//components
import App from './App';
import reducer from './reducers';
import Button from './components/Button';
import FoundMovie from './FoundMovie';
// test
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import NotFound from './components/NotFound';

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk,middleware)));
const render = () => {
    ReactDom.render((
        <AppContainer>
        <Provider store = {store} >
            <Router>
                <Switch>
                <Route exact path = '/'>
                    <Redirect from = '/' to = '/movie?searchBy=title&sortBy=release_date&sortOrder=desc' /> 
                </Route>
                <Route exact path = '/movie' component = {App} />
                <Route exact path = '/search/:id' component = {FoundMovie} />
                <Route path = '*' component = {NotFound} />
                </Switch>
            </Router>
        </Provider>
        </AppContainer>),
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}

