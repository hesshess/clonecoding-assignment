import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const FooterStyle = styled.div`
  text-align: center;
  height: 100px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: underline;
    margin-left: 4px;
    color: inherit;
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <span>Powered by </span>
      <Link
        to={'https://www.w3schools.com/w3css/default.asp'}
        target="_blank"
        rel="none"
      >
        w3.css
      </Link>
    </FooterStyle>
  );
};
export default Footer;
