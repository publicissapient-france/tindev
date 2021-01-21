import React, { FunctionComponent, useState } from 'react';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import Data from '../data/data';

const PlayPage: FunctionComponent = () => {
  const [PlayWithData] = useState(() => Data(Deck));
  return (
    <Layout
      header={<Header withBackground={false} />}
      footer={<Footer withBackground />}
    >
      <Wave />
      <PlayWithData />
    </Layout>
  );
};

export default PlayPage;
