import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = {
  isResponsive?: boolean
  icon?: any
  linkTo?: string
  isMini?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({ isMini, isResponsive, icon, linkTo, children }) => {
  const className = `${styles.button} ${isResponsive ? styles.responsive : ''} ${icon ? styles.icon : ''} ${isMini ? styles.mini : ''}`;
  const style = icon ? { backgroundImage: `url(${icon})` } : {};
  return linkTo ?
    <Link className={className} style={style} to={linkTo}>{children}</Link> :
    <button className={className} style={style}>{children}</button>;
};
