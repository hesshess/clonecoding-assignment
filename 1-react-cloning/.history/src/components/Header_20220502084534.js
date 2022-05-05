import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 1;
  padding: 0 16px;
  box-shadow: 2px 0 8px rgb(0 0 0 / 30%);
  letter-spacing: 3px;
  .right {
    font-size: 25px;
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 54px;
    margin: 0 auto;
  }
  .logo {
    margin-right: auto;
    font-size: 25px;
    letter-spacing: 4px;
  }
`;
const Header = () => {
  return (
    <HeaderStyle>
      <nav className="right">
        <Link className={`${'btn'} ${'logo'}`} to="main">
          Gourmet au Catering
        </Link>
        <Link className="btn" to="about">
          About
        </Link>
        <Link className="btn" to="menu">
          Menu
        </Link>
        <Link className="btn" to="contact">
          Contact
        </Link>
      </nav>
    </HeaderStyle>
  );
};
export default Header;
