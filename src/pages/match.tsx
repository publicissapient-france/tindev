import React, { FunctionComponent } from 'react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import heartImg from '../images/heart.svg';
import shineImg from '../images/shine.svg';
import styles from './match.module.scss';

const Match: FunctionComponent = () => (
  <Layout
    header={<Header />}
    footer={<Footer withBackground />}
  >
    <Wave isSmall />
    <div className={styles.match}>
      <img src={shineImg} alt="" />
      <p className={styles.message}>
        it's a <span className={styles.messageBig}>match</span>
      </p>
      <img src={heartImg} alt="coeur" />
    </div>
  </Layout>
);

export default Match;
