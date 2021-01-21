import React from 'react';
import { animated } from 'react-spring';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';

import image from '../../images/card-image.svg';
import { Action, ActionType } from '../Action/Action';
import cardStyles from './Card.module.scss';

type Props = { onYes: ReactEventHandlers, onNo: ReactEventHandlers };

export const Card = ({ onYes, onNo }: Props) => (
  <div className={cardStyles.card}>
    <div className={cardStyles.image} style={{ backgroundImage: `url(${image})` }} />
    <p className={cardStyles.description}>la qualité sans compromis ?</p>
    <div className={cardStyles.actions}>
      <animated.div {...onNo}>
        <Action type={ActionType.NO} />
      </animated.div>
      <animated.div {...onYes}>
        <Action type={ActionType.YES} />
      </animated.div>
    </div>
  </div>
);
