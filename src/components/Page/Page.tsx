
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';

import favicon from '../../images/favicon.png';

export const Page: FunctionComponent = ({ children }) => (
  <>
    <Helmet>
      <title>TinDev: Be the next match</title>
      <link rel="icon" href={favicon} />
    </Helmet>
    {children}
  </>
);
