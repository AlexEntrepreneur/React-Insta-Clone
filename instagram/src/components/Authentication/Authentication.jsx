import React, { Component } from 'react';

export default function authenticate (AppComponent) {
  return class Authentication extends Component {
    constructor() {
      super();

      this.storedAuthStatus = localStorage.getItem('ig_is_authed');

      this.state = {
        isAuthed: this.storedAuthStatus || false,
        user: {}
      };

    }

    logIn = (usrname, password) => {
      let username = usrname.toLowerCase();
      // Should fetch from API and receive token
      if (username && password) {
        this.setState(
          {
            isAuthed: true ,
            user: { username: username }
          },
          () => {
            localStorage.setItem('ig_is_authed', true);
            localStorage.setItem('ig_user', username);
          }
        );
      }
    }

    logOut = () => {
      function clearLocalStorageItems() {
        for (let key in localStorage) {
          if (key.includes('ig_')) {
            localStorage.removeItem(key);
          }
        }
      }

      this.setState(
        {
          isAuthed: false,
          user: {}
        },
        () => clearLocalStorageItems()
      );
    }

    render() {
      return (
        <AppComponent
          isAuthed={this.state.isAuthed}
          logInFunction={this.logIn}
          logOutFunction={this.logOut}
          user={this.state.user}
        />
      );
    }
  }
}
