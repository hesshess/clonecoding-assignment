import React from 'react';
import styled from 'styled-components';
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
      <a
        href={'https://www.w3schools.com/w3css/default.asp'}
        target="_blank"
        rel="noreferrer noopener"
      >
        w3.css
      </a>
    </FooterStyle>
  );
};
export default Footer;
