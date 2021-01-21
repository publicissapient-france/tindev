import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect } from 'react';

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => {
    navigate('/'); // redirecting to home page
  }, []);

  return (
    <h1>(404) NotFound Page</h1>
  );
};

export default NotFoundPage;
