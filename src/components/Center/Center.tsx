import React, { FunctionComponent } from 'react';

import styles from './Center.module.scss';

export const Center: FunctionComponent = ({ children }) => (
  <div className={styles.center}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
