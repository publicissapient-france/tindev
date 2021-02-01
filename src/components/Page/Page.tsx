import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';

import favicon from '../../images/favicon.webp';
import openGraph from '../../images/open-graph-img.webp';

export const Page: FunctionComponent = ({ children }) => (
  <>
    <Helmet>
      <title>TinDev: Be the next .match()</title>
      <link rel="icon" href={favicon}/>
      <meta property="og:title" content="TinDev: Be the next .match()"/>
      <meta property="og:description" content="Découvrez si vous êtes notre prochain match !"/>
      <meta property="og:image" content={process.env.GATSBY_URL + openGraph}/>
      <meta property="og:url" content={process.env.GATSBY_URL}/>
    </Helmet>
    {children}
  </>
);
