import React, { Component } from 'react';
import searchIcon from '../../assets/magnifying-glass.svg';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: ''
    }
  }

  onSearchInputChange = (event) => {
    this.setState({ searchKeyword: event.target.value });
    this.props.searchPosts(event.target.value);
  };

  render() {
    return(
      <div className="search-box">
        <img src={searchIcon} alt="magnifying glass icon" />
        <input
          onChange={event => this.onSearchInputChange(event) }
          value={this.props.searchKeyword}
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
