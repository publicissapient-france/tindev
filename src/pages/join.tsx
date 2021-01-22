import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from './join.module.scss';

const JoinPage: FunctionComponent = () => (
  <>
    <Header withBackground={true}/>
    <div className={styles.Join}>
      <p className={styles.message}>faisons connaissance&nbsp;!</p>
      <Button>commencer à discuter</Button>
    </div>
    <Footer withBackground/>
  </>
);

export default JoinPage;
