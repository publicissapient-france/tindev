import * as React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';

export const Header = () =>
  <div className={styles.Header}>
    <img className={styles.logo} src={logo} alt={logo}/>
    <div className={styles.tagline}>be the next match</div>
  </div>;
