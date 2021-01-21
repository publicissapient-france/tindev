import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';

export const Button: FunctionComponent = ({ children }) => (
  <button className={styles.button}>{children}</button>
);
