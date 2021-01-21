import React from 'react';

import { Deck } from '../components/Deck/Deck';
import { Header } from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

export default function () {
  return (
    <Layout header={<Header background={false} />}>
      <Deck />
    </Layout>
  );
}
