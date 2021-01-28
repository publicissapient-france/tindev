import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect } from 'react';

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return <div />;
};

export default NotFoundPage;
