import React, { Component } from 'react';
import AanvullijstDetail from '../containers/aanvullijst_detail';
import AanvullijstList from '../containers/aanvullijst_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <AanvullijstList />
        <AanvullijstDetail />
      </div>
    );
  }
}
