import React, { FunctionComponent, useState } from 'react';

import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import catImg from '../images/cat.png';
import unicornImg from '../images/unicorn.png';
import styles from './unmatch.module.scss';

const items = [
  { subtitle: ['...voici un chaton'], img: catImg },
  { subtitle: ['...voici une licorne'], img: unicornImg }
];

const Unmatch: FunctionComponent = () => {
  const [index] = useState(Math.round(Math.random() * (items.length - 1)));
  const item = items[index];

  return (
    <Layout
      header={<Header />}
      footer={<Footer withBackground />}
    >
      <Wave isSmall />
      <Center>
        <Heading title={['Pas de match pour vous...']} subtitle={item.subtitle} subtitleSize="sm" />
        <div className={styles.image}>
          <img src={item.img} />
        </div>
      </Center>
    </Layout>
  );
}

export default Unmatch;
