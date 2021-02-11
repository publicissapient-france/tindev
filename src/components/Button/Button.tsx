import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

export type ButtonProps = {
  isResponsive?: boolean
  icon?: any
  linkTo?: string
  isMini?: boolean
  outboundLink?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({
                                                         outboundLink,
                                                         isMini,
                                                         isResponsive,
                                                         icon,
                                                         linkTo,
                                                         children
                                                       }) => {
  const className = `${styles.button} ${isResponsive ? styles.responsive : ''} ${icon ? styles.icon : ''} ${isMini ? styles.mini : ''}`;
  const style = icon ? { backgroundImage: `url(${icon})` } : {};
  if (linkTo) {
    if (outboundLink) {
      return <OutboundLink className={className} style={style} href={linkTo}>{children}</OutboundLink>;
    }
    return <Link className={className} style={style} to={linkTo}>{children}</Link>;
  }
  return <button className={className} style={style}>{children}</button>;
};
