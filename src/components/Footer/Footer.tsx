import React, { FunctionComponent } from 'react';
import darkPsImage from '../../images/publicis-sapient.svg';
import lightPsImage from '../../images/publicis-sapient-light.svg';
import styles from './Footer.module.scss';

export interface FooterProps {
  withBackground?: boolean;
}

export const Footer: FunctionComponent<FooterProps> = ({ withBackground = false }) => (
  <div className={`${styles.footer} ${withBackground ? styles.footerAlt : ''}`}>
    <img src={withBackground ? lightPsImage : darkPsImage} alt="logo publicis sapient"/>
  </div>
);
