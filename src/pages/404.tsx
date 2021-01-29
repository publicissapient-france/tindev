import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect } from 'react';
import Helmet from 'react-helmet';

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Helmet>
      <title>TinDev</title>
    </Helmet>
  );
};

export default NotFoundPage;
