import React, { Component } from 'react';
import PostsPage from './components/PostsPage/PostsPage';
import LoginPage from './components/LoginPage/LoginPage';

import './App.css';

class App extends Component {
  render() {
    if (this.props.isAuthed) {
      return (
        <PostsPage logOut={this.props.logOutFunction} user={this.props.user} />
      );
    }
    return (
      <LoginPage logIn={this.props.logInFunction} />
    );
  }
}

export default App;
