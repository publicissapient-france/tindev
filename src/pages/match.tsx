import * as React from 'react';
import { Header2 } from '../components/Header/Header2';
import effectImg from '../images/effect.svg';
import heartImg from '../images/heart.svg';
import matchStyles from './match.module.scss';

const Match = () => (
  <>
    <Header2/>
    <div className={matchStyles.Match}>
      <img src={effectImg} alt=""/>
      <p className={matchStyles.message}>it's a <span>match</span></p>
      <img className={matchStyles.heart} src={heartImg} alt="coeur"/>
    </div>
  </>
);

export default Match;
