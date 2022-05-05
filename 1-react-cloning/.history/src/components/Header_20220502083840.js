import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyle = styled.div`
  width: 100%;
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
