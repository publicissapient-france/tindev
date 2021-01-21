import React, { FunctionComponent } from 'react';
import { animated } from 'react-spring';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';

import image from '../../images/card-image.svg';
import { Action, ActionType } from '../Action/Action';
import styles from './Card.module.scss';

export interface CardProps {
  onYes: ReactEventHandlers;
  onNo: ReactEventHandlers;
}

export const Card: FunctionComponent<CardProps> = ({ onYes, onNo }) => (
  <div className={styles.card}>
    <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
    <p className={styles.description}>la qualité sans compromis ?</p>
    <div className={styles.actions}>
      <animated.div {...onNo}>
        <Action type={ActionType.NO} />
      </animated.div>
      <animated.div {...onYes}>
        <Action type={ActionType.YES} />
      </animated.div>
    </div>
  </div>
);
