import React, { Component } from 'react';

export default function authenticate (AppComponent, appPrefix) {

  return class Authentication extends Component {
    constructor(props) {
      super(props);

      this.storedAuthStatus = localStorage.getItem(appPrefix + '_is_authed');

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
            localStorage.setItem(appPrefix + '_is_authed', true);
            localStorage.setItem(appPrefix + '_user', username);
          }
        );
      }
    }

    logOut = () => {
      function clearLocalStorageItems() {
        for (let key in localStorage) {
          if (key.includes(appPrefix + '_')) {
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
          appPrefix={appPrefix}
        />
      );
    }
  }
}
