import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onInputChange = (event, fieldName) => {
    // fieldName should correspond with the state key name
    this.setState({ [fieldName]: event.target.value })
  }

  onLoginSubmit = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="login-page-container">
        <form
          type="submit"
          onSubmit={e => this.onLoginSubmit(e)}
          className="login-form"
        >
          <div className="login-logo"></div>
          <input
            type="text"
            value={this.state.username}
            placeholder="your username"
            onChange={(e) => this.onInputChange(e, e.target.name)}
            name="username"
            maxLength="75"
            className="full-width"
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="your password"
            onChange={(e) => this.onInputChange(e, e.target.name)}
            name="password"
            className="full-width"
          />
        <button type="submit" className="btn-primary full-width">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
