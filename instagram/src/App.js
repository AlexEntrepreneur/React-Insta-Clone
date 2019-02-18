import React, { Component } from 'react';
import fakeData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import logo from './assets/ig-logo.png';
import logoIcon from './assets/ig-logo-icon.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: fakeData
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="logo-container">
            <img src={logoIcon} alt="instagram logo"/>
            <div className="seperator"></div>
            <img src={logo} alt="instagram logo"/>
          </div>
          <SearchBar />
          <nav className="menu-container">
            <button>Explore</button>
            <button>Likes</button>
            <button>Profile</button>
          </nav>
        </header>
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
