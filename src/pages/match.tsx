import React, { FunctionComponent } from 'react';

import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
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
    <Center>
      <img src={shineImg} alt="" className={styles.shine} />
      <Heading title={['It\'s a']} subtitle={['match']} subtitleSize="lg" />
      <img src={heartImg} alt="coeur" />
    </Center>
  </Layout>
);

export default Match;
