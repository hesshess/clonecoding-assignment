/**
 * @filename: Meta.js
 * @description: head안 구현
 * @author: Hess
 */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
      </Helmet>
    </HelmetProvider>
  );
};
Meta.defaultProps = {
  title: 'Gourmet Au Catering',
  description: 'Gourmet Clone Coding',
  keywords: 'Gourmet',
  author: 'Hess',
  url: window.location.href,
};
export default Meta;
