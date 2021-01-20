import React from 'react';
import darkPsImage from '../../images/publicis-sapient.svg';
import lightPsImage from '../../images/publicis-sapient-light.svg';
import styles from './Footer.module.scss';

type Props = { isDark?: boolean };

export const Footer = ({ isDark }: Props) => (
  <div className={styles.footer}>
    <img src={isDark ? darkPsImage : lightPsImage} alt="logo publicis sapient"/>
  </div>
);
