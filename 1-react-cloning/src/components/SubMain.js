import React from 'react';
import styled from 'styled-components/';
import hamburger from '../assets/img/hamburger.jpg';
const SubMainStyle = styled.section`
  position: relative;
  .img {
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  h1 {
    position: absolute;
    left: 24px;
    bottom: 40px;
    color: #999;
    font-size: 36px;
    letter-spacing: 3px;
    font-family: 'Playfair Display';
  }
`;
const SubMain = () => {
  return (
    <SubMainStyle className="main">
      <div className="img">
        <img src={hamburger} alt="main" />
      </div>
      <h1>Le Catering</h1>
    </SubMainStyle>
  );
};
export default SubMain;
