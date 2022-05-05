import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
  width: 100vw;
  height: 3%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  letter-spacing: 5px;
  padding: 28px;
  box-shadow: 0px 2px 6px grey;
  z-index: 3;
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
