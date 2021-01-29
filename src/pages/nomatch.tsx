import React, { FunctionComponent, useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import catImg from '../images/nomatch-cat.png';
import unicornImg from '../images/nomatch-unicorn.png';
import styles from './nomatch.module.scss';

const items = [
  { text: ['...voici un chaton'], image: catImg },
  { text: ['...voici une licorne'], image: unicornImg }
];

const NoMatch: FunctionComponent = () => {
  const [index, setIndex] = useState<number>();
  const item = index !== undefined ? items[index] : undefined;

  useEffect(() => {
    setIndex(Math.round(Math.random() * (items.length - 1)));
  }, []);

  return (
    <>
      <Helmet>
        <title>TinDev</title>
      </Helmet>
      <Layout
        header={<Header />}
        footer={<Footer withBackground />}
      >
        <Wave isSmall />
        {item ? <Center>
          <Heading title={['Pas de match pour vous...']} subtitle={item.text} subtitleSize="sm" />
          <div className={styles.image}>
            <img src={item.image} />
          </div>
        </Center> : null}
      </Layout>
    </>
  );
}

export default NoMatch;
