import React, { Component } from 'react';
import fakeData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import './Header.css';
import logo from './assets/ig-logo.png';
import logoIcon from './assets/ig-logo-icon.svg';

class App extends Component {
  constructor() {
    super();

    this.storedPostsData = JSON.parse(localStorage.getItem('ig_posts'));

    this.state = {
      posts: this.storedPostsData || [],
      myUsername: 'myUsername'
    };
  }

  componentDidMount() {
    const dataWithIdAndDisplayKeys = fakeData.map(post => ({ ...post, display: true }));

    this.setState({ posts: dataWithIdAndDisplayKeys});
  }

  componentDidUpdate() {
    const postsAsString = JSON.stringify(this.state.posts);
    localStorage.setItem('ig_posts', postsAsString);
  }

  searchPosts = searchKeyword => {
    window.scrollTo(0, 0);
    const posts = this.state.posts;
    const filteredPostsDisplayed = posts.map(post => {
      if (post.username.includes(searchKeyword)) {
        return {
          ...post,
          display: true
        }
      }
      else {
        return {
          ...post,
          display: false
        }
      }
    });

    const allPostsDisplayed = posts.map(post => {
      return {
        ...post,
        display: true
      }
    });

    if (searchKeyword) {
      this.setState({ posts: filteredPostsDisplayed })
    }
    else {
      this.setState({ posts: allPostsDisplayed })
    }
  };

  addComment = (postId, commentObject) => {
    const updatedPostComments = this.state.posts.map(post => {
      if (post.timestamp === postId) {
          commentObject.username = this.state.myUsername;
          post.comments.push(commentObject);
          return post;
        }
        return post;
    });

    this.setState({
      posts: updatedPostComments
    });
  };

  likeUnlikePost = (postId, liked) => {
    const updatedPosts = this.state.posts.map(post => {
      if (post.timestamp === postId) {
          if (liked) {
            post.likes++;
          }
          else {
            post.likes--;
          }
          return post;
        }
        return post;
    });

    this.setState({
      posts: updatedPosts
    });
  };

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
            <SearchBar
              searchPosts={this.searchPosts}
              searchKeyword={this.state.searchKeyword}
            />
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
            likeUnlikePostFunction={this.likeUnlikePost}
          />
        </div>
      </div>
    );
  }
}

export default App;
