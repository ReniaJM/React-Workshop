import React from 'react';

import './CatItem.scss';

export default class CatItem extends React.Component {
    render() {
      const styles = {
        color: this.props.kids ? 'black' : 'blue'
      }

      return (
        <li className="cat-item" style={styles}>
          {this.props.name}
          <span className="cat-item__age"> {this.props.age} </span>
        </li>
      );
    }
}
