import { useEffect } from 'react';
import { navigate } from 'gatsby';
import * as React from 'react';

export default function NotFoundPage() {
  useEffect(() => {
    navigate('/'); // redirecting to home page
  }, []);

  return (
    <h1>(404) NotFound Page</h1>
  );
}
