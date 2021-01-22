import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import styles from './join.module.scss';

const JoinPage: FunctionComponent = () => (
  <Layout header={<Header withBackground={true} />} footer={<Footer />}>
    <div className={styles.Join}>
      <p className={styles.message}>faisons connaissance&nbsp;!</p>
      <Button>commencer à discuter</Button>
    </div>
  </Layout>
);

export default JoinPage;
