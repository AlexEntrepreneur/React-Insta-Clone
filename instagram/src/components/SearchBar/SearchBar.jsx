import React, { Component } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/magnifying-glass.svg';

const StyledSearchBar = styled.div`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  height: 2.8rem;
  display: flex;
  align-items: center;

  & img {
    height: 1.1rem;
    margin: 0 1rem;
    margin-right: 0;
  }

  /* Input Styles */

  & input {
    height: 100%;
    background: unset;
    border: none;
    line-height: unset;

    &:last-of-type {
      margin: 0;
    }
  }
`;

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
      <StyledSearchBar>
        <img src={searchIcon} alt="magnifying glass icon" />
        <input
          onChange={event => this.onSearchInputChange(event) }
          value={this.props.searchKeyword}
          type="text"
          placeholder="Search"
        />
    </StyledSearchBar>
    );
  }
}

export default SearchBar;
