import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect } from 'react';

import { Page } from '../components/Page/Page';

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return <Page />;
};

export default NotFoundPage;
