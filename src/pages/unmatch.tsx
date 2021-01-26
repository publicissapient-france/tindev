import React, { FunctionComponent } from 'react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import styles from './unmatch.module.scss';

const Match: FunctionComponent = () => (
  <Layout
    header={<Header />}
    footer={<Footer withBackground />}
  >
    <Wave isSmall />
    <div className={styles.match}>
      <p className={styles.message}>
        Pas de match pour vous...
      </p>
    </div>
  </Layout>
);

export default Match;
