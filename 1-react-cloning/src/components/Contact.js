import React from 'react';
import styled from 'styled-components/';
const ContactStyle = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px;
  h1 {
    margin-bottom: 40px;
    font-size: 36px;
    letter-spacing: 3px;
    font-family: 'Playfair Display';
  }
  p.text {
    margin-bottom: 40px;
    font-size: 15px;
  }
  p.point {
    margin: 20px 0;
    font-weight: bold;
    color: #607d8b;
    font-size: 18px;
  }
  input {
    display: block;
    line-height: 55px;
    height: 55px;
    margin: 15px 0;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
    font-size: 14px;
  }
  .btn {
    border: 0;
    margin-top: 20px;
    background: #f1f1f1;
    font-size: inherit;
  }
`;
const Contact = () => {
  const date = new Date().toISOString().substring(0, 16);
  return (
    <ContactStyle className="contact">
      <h1 className="h1">Contact</h1>
      <p className="text">
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="point">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>
      <p className="text">
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="How many people" />
        <input type="datetime-local" defaultValue={date} />
        <input type="text" placeholder="Message \ Special requirements" />
        <button className="btn send">SEND MESSAGE</button>
      </form>
    </ContactStyle>
  );
};
export default Contact;
