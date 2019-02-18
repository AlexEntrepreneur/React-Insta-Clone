import React, { Component } from 'react';
import searchIcon from '../../assets/magnifying-glass.svg';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return(
      <div className="search-box">
        <img src={searchIcon} alt="magnifying glass icon" />
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;
