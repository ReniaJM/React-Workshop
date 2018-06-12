import React from 'react';

import './CatList.scss';

import CatItem from '../CatItem/CatItem.jsx'

export default class CatList extends React.Component {
    render() {
      return (
        <div className="cat-list">
          <p> {this.props.category} </p>
          <ul>
            {this.props.filteredCats.map((item, index) => {
              return (
                <CatItem
                  key={index}
                  name={item.name}
                  age={item.age}
                  kids={item.likesKids}
                />
              )
            })}
          </ul>
        </div>
      );
    }
}
