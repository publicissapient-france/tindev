import * as React from 'react';
import effectImg from '../images/effect.svg';
import heartImg from '../images/heart.svg';
import matchStyles from './match.module.scss';
import { Header } from '../components/Header/Header';

const Match = () => (
  <>
    <Header background={false}/>
    <div className={matchStyles.match}>
      <img src={effectImg} alt=""/>
      <p className={matchStyles.message}>it's a <span>match</span></p>
      <img className={matchStyles.heart} src={heartImg} alt="coeur"/>
    </div>
  </>
);

export default Match;
