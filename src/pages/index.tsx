import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import { Page } from '../components/Page/Page';
import styles from './index.module.scss';
import infoImg from '../images/info.svg';

const IndexPage: FunctionComponent = () =>
  <Page>
    <Layout header={<Header withBackground/>} footer={<Footer withArrow />}>
      <Center>
        <div className={styles.how}>
          <Button isMini icon={infoImg} linkTo="/how">Comment ça marche&nbsp;?</Button>
        </div>
        <Heading title={['Découvrez si vous êtes', 'notre prochain']} subtitle={['match !']}/>
        <div className={styles.button}>
          <Button isResponsive linkTo={'/play'}>C'est parti !</Button>
        </div>
      </Center>
    </Layout>
  </Page>;

export default IndexPage;
