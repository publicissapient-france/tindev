import React, { FunctionComponent } from 'react';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';

const PlayPage: FunctionComponent = () => (
  <Layout
    header={<Header withBackground={false} />}
    footer={<Footer withBackground />}
  >
    <Wave />
    <Deck />
  </Layout>
);

export default PlayPage;
