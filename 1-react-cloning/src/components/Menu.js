import React from 'react';
import styled from 'styled-components/';
import tablesetting from '../assets/img/tablesetting.jpg';
const MenuStyle = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-direction: row-reverse;
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
      margin-bottom: 20px;
      font-size: 20px;
    }
    .text {
      margin: 0 18px 40px;
      font-size: 14px;
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
const Menu = () => {
  return (
    <MenuStyle className="menu">
      <div className="img">
        <img src={tablesetting} alt="tablesetting" />
      </div>
      <div className="info">
        <h1 className="h1">Our Menu</h1>
        <ul className="menu-detail">
          <li>
            <h2 className="h2">Bread Basket</h2>
            <p className="text sub">
              Assortment of fresh baked fruit breads and muffins 5.50
            </p>
          </li>
          <li>
            <h2 className="h2">Honey Almond Granola with Fruits</h2>
            <p className="text sub">
              Natural cereal of honey toasted oats, raisins, almonds and dates
              7.00
            </p>
          </li>
          <li>
            <h2 className="h2">Belgian Waffle</h2>
            <p className="text sub">
              Vanilla flavored batter with malted flour 7.50
            </p>
          </li>
          <li>
            <h2 className="h2">Scrambled eggs</h2>
            <p className="text sub">
              Scrambled eggs, roasted red pepper and garlic, with green onions
              7.50
            </p>
          </li>
          <li>
            <h2 className="h2">Blueberry Pancakes</h2>
            <p className="text sub">
              With syrup, butter and lots of berries 8.50
            </p>
          </li>
        </ul>
      </div>
    </MenuStyle>
  );
};
export default Menu;
