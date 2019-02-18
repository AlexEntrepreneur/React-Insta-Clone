import React, { Component } from 'react';
import fakeData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import './Header.css';
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
          <div className="header-content">
            <a href="/" className="logo-container">
              <img src={logoIcon} alt="instagram logo"/>
              <div className="separator"></div>
              <img src={logo} alt="instagram logo"/>
            </a>
            <SearchBar />
            <nav className="menu-container">
              <button>Explore</button>
              <button>Likes</button>
              <button>Profile</button>
            </nav>
          </div>
        </header>
        <div className="main-content-container">
          <PostsContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
