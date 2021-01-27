import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import styles from './index.module.scss';

const IndexPage: FunctionComponent = () =>
  <Layout header={<Header withBackground />} footer={<Footer />}>
    <Center>
      <Heading title={['Découvrez si vous êtes', 'notre prochain']} subtitle={['match !']} />
      <div className={styles.button}>
        <Button linkTo={'/play'}>c'est parti !</Button>
      </div>
    </Center>
  </Layout>

export default IndexPage;
