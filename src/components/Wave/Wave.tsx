import React, { FunctionComponent } from 'react';

import waveImg from '../../images/wave.svg';
import styles from './Wave.module.scss';

export interface WaveProps {
  isSmall?: boolean;
}

export const Wave: FunctionComponent<WaveProps> = ({ isSmall = false }) => (
  <svg
    className={`${styles.wave} ${isSmall ? styles.waveSmall : ''}`}
    preserveAspectRatio="none"
    viewBox="0 0 360 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 26.4632C0 26.4632 44.5 0 97 0C149.5 0 183 31.4563 255 31.4563C327 31.4563 360 4.49373 360 4.49373V360H0V26.4632Z"
      fill="#FFA1C3" />
  </svg>

);
