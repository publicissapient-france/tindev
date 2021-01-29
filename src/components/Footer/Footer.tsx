import React, { FunctionComponent } from 'react';
import darkPsImage from '../../images/ps-black.svg';
import lightPsImage from '../../images/ps-white.svg';
import styles from './Footer.module.scss';

export interface FooterProps {
  withBackground?: boolean;
}

export const Footer: FunctionComponent<FooterProps> = ({ withBackground = false }) => (
  <div className={`${styles.footer} ${withBackground ? styles.footerAlt : ''}`}>
    <img src={withBackground ? lightPsImage : darkPsImage} height="28" alt="logo publicis sapient"/>
  </div>
);
