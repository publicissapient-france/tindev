import React from 'react';
import styles from './Header.module.scss';
import logoWhite from '../../images/logo-white.svg';
import logoBlack from '../../images/logo-black.svg';

export const Header = ({ background }: { background: boolean }) =>
  <header className={`${styles.header} ${background ? styles.headerAlt : ''}`}>
    <div className={styles.container}>
      <img src={background ? logoWhite : logoBlack} alt='logo'/>
      <div className={styles.tagline}>Be the next match</div>
    </div>
  </header>;
