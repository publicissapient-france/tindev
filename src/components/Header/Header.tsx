import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import logoBlack from '../../images/logo-black.svg';
import logoWhite from '../../images/logo-white.svg';
import styles from './Header.module.scss';

export interface HeaderProps {
  withBackground?: boolean;
}

export const Header: FunctionComponent<HeaderProps> = ({ withBackground = false }) =>
  <header className={`${styles.header} ${withBackground ? styles.headerAlt : ''}`}>
    <Link to={'/'} className={styles.container}>
      <img src={withBackground ? logoWhite : logoBlack} alt='logo' />
      <div className={styles.tagline}>Be the next match</div>
    </Link>
  </header>;
