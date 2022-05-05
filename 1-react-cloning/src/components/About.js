import React from 'react';
import styled from 'styled-components/';
import tablesetting2 from '../assets/img/tablesetting2.jpg';
const AboutStyle = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: left;
  .img {
    width: 50%;
    opacity: 0.8;
    padding: 0 16px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .info {
    width: 50%;
    padding: 16px;
    h1 {
      text-align: center;
      margin-bottom: 48px;
      font-size: 36px;
      letter-spacing: 3px;
      font-family: 'Playfair Display';
    }
    h2 {
      text-align: center;
    }
    .text {
      font-size: 18px;
      margin: 18px 0;
      line-height: 1.5;
      &.sub {
        color: #999;
      }
    }
    .text-bg-gray {
      background: #f1f1f1;
      padding: 2px 8px;
    }
  }
`;
const About = () => {
  return (
    <AboutStyle className="about">
      <div className="img">
        <img src={tablesetting2} alt="tablesetting2" />
      </div>
      <div className="info">
        <h1>About Catering</h1>
        <h2>Tradition since 1889</h2>
        <p className="text">
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use <span className="text-bg-gray">seasonal</span> ingredients.
        </p>
        <p className="text sub">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </AboutStyle>
  );
};
export default About;
