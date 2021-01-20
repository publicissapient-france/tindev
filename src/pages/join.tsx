import React from 'react';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import styles from './join.module.scss';
import { Footer } from '../components/Footer/Footer';

export default function JoinRoute() {
  return (
    <>
      <Header background={true}/>
      <div className={styles.Join}>
        <p className={styles.message}>faisons connaissance&nbsp;!</p>
        <Button>commencer à discuter</Button>
      </div>
      <Footer isDark/>
    </>
  );
}
