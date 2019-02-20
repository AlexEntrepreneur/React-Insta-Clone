import React, { Component } from 'react';

export default function authenticate (AppComponent) {
  return class Authentication extends Component {
    render() {
      return (
        <AppComponent />
      );
    }
  }
}
