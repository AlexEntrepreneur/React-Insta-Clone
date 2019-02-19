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
      posts: [],
      myUsername: 'myUsername'
    };
  }

  componentDidMount() {
    this.setState({ posts: fakeData});
  }

  // componentDidUpdate() {
  // }

  addComment = (postId, commentObject) => {
    const updatedPostComments = this.state.posts.map(post => {
      if (post.timestamp === postId) {
          commentObject.username = this.state.myUsername;
          post.comments.push(commentObject);
          return post;
        }
        return post;
    })

    this.setState({
      posts: updatedPostComments
    });
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
          <PostsContainer
            posts={this.state.posts}
            addCommentFunction={this.addComment}
          />
        </div>
      </div>
    );
  }
}

export default App;
