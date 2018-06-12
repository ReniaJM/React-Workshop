import React from 'react';

import './SearchBar.scss';

export default class SearchBar extends React.Component {

  handleChange = () => {
    if(typeof this.props.selectCats === 'function') {
      this.props.selectCats();
    }
  }

  typeCatName = (event) => {
    if(typeof this.props.searchCatByName === 'function') {
      this.props.searchCatByName(event.target.value);
    }
  }

    render() {
      return (
        <div className="searchbar">
          <input onChange={this.typeCatName} className="searchbar__input" type="text" placeholder="wpisz imie kota"/>
          <div className="searchbar__checkbox-container">
            <label htmlFor="check"> Tylko koty, ktore lubia dzieci </label>
            <input onChange={this.handleChange} id="check" type="checkbox"/>
          </div>
        </div>
      );
    }
}
