import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/ig-logo.png';

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  padding: 3rem 3rem 7rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  background-color: white;
`;

const LoginLogo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 5.3rem;
  width: 17.5rem;
  margin-bottom: 1.5rem;
`;

export default class LoginPage extends Component {
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
      <LoginPageContainer>
        <LoginForm
          type="submit"
          onSubmit={e => this.onLoginSubmit(e)}
        >
          <LoginLogo />
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
        </LoginForm>
      </LoginPageContainer>
    );
  }
}
