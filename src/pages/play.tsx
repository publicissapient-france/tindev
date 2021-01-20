import React from 'react';
import { Header } from '../components/Header/Header';
import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import styles from './play.module.scss';

export default function () {
  return (
    <>
      <Header background={false}/>
      <Deck/>
      <div className={styles.playBottom}/>
      <Footer/>
    </>
  );
}
