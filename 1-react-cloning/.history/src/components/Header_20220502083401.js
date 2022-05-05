import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderCom = styled.div`
  height: 54px;
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 1;
  padding: 0 16px;
  box-shadow: 2px 0 8px rgb(0 0 0 / 30%);
  letter-spacing: 3px;
  .lnb {
    display: flex;
    align-items: center;
    max-width: 1100px;
    height: 54px;
    margin: 0 auto;
  }
  .logo {
    margin-right: auto;
    font-size: 15px;
    letter-spacing: 4px;
  }
`;
const Header = () => {
  return (
    <HeaderCom>
      <nav className="lnb">
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
    </HeaderCom>
  );
};
export default Header;
