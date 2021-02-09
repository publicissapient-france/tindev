import React, { FunctionComponent } from 'react';
import styles from './Modal.module.scss';

export const Modal: FunctionComponent = ({ children }) =>
  <div className={styles.background}>
    <div className={styles.head}/>
    <div className={styles.modal}>
      {children}
    </div>
    <div className={styles.foot}/>
  </div>;
