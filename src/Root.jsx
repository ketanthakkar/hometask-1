import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
// pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const Root = ({ Router, location, context, store }) => (
  <Provider store = { store } >
    <Router location={location} context={context}>
      <div>
        <Route exact path = '/home' component = {HomePage} />
        <Route exact path = '/search/:id' component = {SearchPage} />
      </div>
    </Router>
  </Provider>
);

export default Root;

