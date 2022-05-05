import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyle = styled.div`
  height: 54px;
  top: 0;
  background: #fff;
  width: 100%;

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
    <HeaderStyle>
      <nav className="lnb">
        <NavLink className={`${'btn'} ${'logo'}`} to="main">
          Gourmet au Catering
        </NavLink>
        <NavLink className="btn" to="about">
          About
        </NavLink>
        <NavLink className="btn" to="menu">
          Menu
        </NavLink>
        <NavLink className="btn" to="contact">
          Contact
        </NavLink>
      </nav>
    </HeaderStyle>
  );
};
export default Header;
