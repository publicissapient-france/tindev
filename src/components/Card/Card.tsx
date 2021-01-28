import React, { FunctionComponent } from 'react';
import { animated } from 'react-spring';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';

import { DataItem } from '../../services/data.model';
import image from '../../images/cards/card-example.svg';
import { Action, ActionType } from '../Action/Action';
import styles from './Card.module.scss';

export interface CardProps {
  data: DataItem;
  onYes: ReactEventHandlers;
  onNo: ReactEventHandlers;
}

export const Card: FunctionComponent<CardProps> = ({ data, onYes, onNo }) => (
  <div className={styles.card}>
    <img className={styles.image} src={image} draggable={false} />
    <p className={styles.description}>
      <span>{data.question}</span>
    </p>
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
