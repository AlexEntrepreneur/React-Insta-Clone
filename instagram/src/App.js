import React, { Component } from 'react';
import fakeData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer.js';

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
          <div className="logo-container">Instagram</div>
          {/*<SearchBar />*/}
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
