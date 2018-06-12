import React from 'react';

import './CatList.scss';

import CatItem from '../CatItem/CatItem.jsx'

export default class CatList extends React.Component {
    render() {
      return (
        <div className="cat-list">
          <CatItem />
          <CatItem />
          <CatItem />
          <CatItem />
          <CatItem />
        </div>
      );
    }
}
