import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
// pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const Root = ({ Router, location, context }) => (
  <Router location={location} context={context}>
    <div>
      <h1>Server Side Renderig</h1>
      <Route path = '/home' component = {HomePage} />
      <Route path = '/search' component = {SearchPage} />
    </div>
  </Router>
);

export default Root;

