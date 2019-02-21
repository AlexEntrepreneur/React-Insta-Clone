import React from 'react'
import styled from 'styled-components';
import '../../Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/ig-logo.png';
import logoIcon from '../../assets/ig-logo-icon.svg';

const IGHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 7.8rem;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 98rem;
`;

const LogoContainer = styled.a`
  display: flex;
  height: 50%;
  padding: .5rem 0;
`;

const LogoImg = styled.img`
  height: 100%;
`;

class Header extends React.Component {
  render() {
    return (
      <IGHeader>
        <HeaderContainer>
          <LogoContainer href="/" className="logo-container">
            <LogoImg src={logoIcon} alt="instagram logo"/>
            <div className="separator"></div>
            <LogoImg src={logo} alt="instagram logo"/>
          </LogoContainer>
          <SearchBar
            searchPosts={this.props.searchPostsFunction}
          />
          <nav className="menu-container">
            <button>Explore</button>
            <button>Likes</button>
            <button>Profile</button>
          </nav>
        </HeaderContainer>
      </IGHeader>
    );
  }
}

export default Header;
