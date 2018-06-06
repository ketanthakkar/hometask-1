import React, { Component, Fragment } from 'react';

import SearchPanel from '../../components/SearchPanel';


class SearchPage extends Component {
  render() {
    return (
      <Fragment>
        <h1> search panel</h1>
        <SearchPanel />
      </Fragment>
    )
  }
}

export default SearchPage;
