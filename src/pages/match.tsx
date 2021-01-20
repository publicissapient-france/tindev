import * as React from 'react';
import effectImg from '../images/effect.svg';
import heartImg from '../images/heart.svg';
import styles from './match.module.scss';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const Match = () => (
  <>
    <Header background={false}/>
    <div className={styles.match}>
      <img src={effectImg} alt=""/>
      <p className={styles.message}>it's a <span>match</span></p>
      <img className={styles.heart} src={heartImg} alt="coeur"/>
    </div>
    <div className={styles.matchBottom}/>
    <Footer/>
  </>
);

export default Match;
