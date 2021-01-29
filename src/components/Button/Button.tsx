import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  isResponsive?: boolean;
  icon?: any;
  linkTo?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ isResponsive, icon, linkTo, children }) => {
  const className = `${styles.button} ${isResponsive ? styles.responsive : ''} ${icon ? styles.icon : ''}`;
  console.log(className)
  const style = icon ? { backgroundImage: `url(${icon})` } : {};
  return linkTo ?
    <Link className={className} style={style} to={linkTo}>{children}</Link> :
    <button className={className} style={style}>{children}</button>;
}
