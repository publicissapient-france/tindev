import React, { FunctionComponent } from 'react';

import styles from './Wave.module.scss';

export interface WaveProps {
  isSmall?: boolean;
}

export const Wave: FunctionComponent<WaveProps> = ({ isSmall = false }) => (
  <div className={`${styles.wave} ${isSmall ? styles.waveSmall : ''}`} />
);
