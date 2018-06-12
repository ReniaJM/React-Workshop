import React from 'react';

import CatList from '../CatList/CatList.jsx'

export default class CatTable extends React.Component {
    render() {
      return (
        <div>
          <h1> Hello CatTable </h1>
          <CatList />
          <CatList />
        </div>
      );
    }
}
