import React from 'react';

import './CatTable.scss';

import CatList from '../CatList/CatList.jsx'

export default class CatTable extends React.Component {
    render() {

      const maleArray = this.props.cats.filter(cat => cat.category === 'male');
      const femaleArray = this.props.cats.filter(cat => cat.category === 'female');

      return (
        <div>
          <p>
            <strong className="cat-list__text"> Name </strong>
            <strong className="cat-list__text"> Age </strong>
          </p>
          <CatList filteredCats={maleArray} category="male"/>
          <CatList filteredCats={femaleArray} category="female"/>
        </div>
      );
    }
}
