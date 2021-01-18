import * as React from 'react';
import styles from './Header2.module.scss';
import logo from '../../images/logo2.svg';

export const Header2 = () =>
  <div className={styles.Header}>
    <img className={styles.logo} src={logo} alt={logo}/>
    <div className={styles.tagline}>be the next match</div>
  </div>;
