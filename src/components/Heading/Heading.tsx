import React, { FunctionComponent } from 'react';

import styles from './Heading.module.scss';

export interface HeadingProps {
  title: string[];
  subtitle?: string[];
  subtitleSize?: 'sm' | 'md' | 'lg';
}

export const Heading: FunctionComponent<HeadingProps> = ({ title, subtitle, subtitleSize = 'md' }) => {
  const getText = (data: string[]) => data.map((text, index) => index < data.length - 1 ? <>{text}<br /></> : text);

  const subtitleClass = subtitleSize === 'sm' ? styles.subtitleSmall : subtitleSize === 'lg' ? styles.subtitleLarge : '';

  return (
    <hgroup className={styles.heading}>
      <div className={styles.title}>{getText(title)}</div>
      {subtitle ? <div className={`${styles.subtitle} ${subtitleClass}`}>{getText(subtitle)}</div> : null}
    </hgroup>
  );
}
