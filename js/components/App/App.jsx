import React from 'react';

import './App.scss';

import CatTable from '../CatTable/CatTable.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default class App extends React.Component {
    render() {
      return (
        <div className="container">
          <SearchBar />
          <CatTable />
        </div>
      );
    }
}
