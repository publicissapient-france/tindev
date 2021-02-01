import React, { FunctionComponent, useEffect, useState } from 'react';

import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import catImg from '../images/nomatch-cat.webp';
import unicornImg from '../images/nomatch-unicorn.webp';
import styles from './nomatch.module.scss';
import { Page } from '../components/Page/Page';

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
    <Page>
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
    </Page>
  );
}

export default NoMatch;
