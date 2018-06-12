import React from 'react';

import 'whatwg-fetch'

import './App.scss';
import CatTable from '../CatTable/CatTable.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      filteredCats: [],
      pending: true,
      checkboxCliked: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/cats')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cats: data,
          filteredCats: data,
          pending: false
        })
      })
  }

  selectLikableCats = () => {

    let likeableCats;

    if (this.state.checkboxCliked) {
      likeableCats = this.state.cats
    } else {
      likeableCats = this.state.cats.filter(item => {
        return item.likesKids
      })
    }

    this.setState({
      filteredCats: likeableCats,
      checkboxCliked: !this.state.checkboxCliked
    })

  }

  searchCat = (value) => {
    let typedCat;

    if (value) {
      typedCat = this.state.filteredCats.filter(item => {
        return item.name.toLowerCase().indexOf(value) > -1
      });
    } else {
      typedCat = this.state.cats
    }

    this.setState({
      filteredCats: typedCat
    })

  }

  render() {
    if(this.state.pending) {
      return <p> Loading </p>;
    }

    return (
      <div className="container">
        <SearchBar searchCatByName={this.searchCat} selectCats={this.selectLikableCats}/>
        <CatTable cats={this.state.filteredCats}/>
      </div>
    );
  }
}
