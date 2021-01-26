import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';

export interface LinkProps {
  linkTo?: string;
}

export const Button: FunctionComponent<LinkProps> = ({ linkTo, children }) =>
  linkTo ?
    <Link className={styles.button} to={linkTo}>{children}</Link> :
    <button className={styles.button}>{children}</button>;
