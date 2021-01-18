import * as React from 'react';
import cardStyles from './Card.module.scss';
import image from '../../images/card-image.svg';
import { Action, ActionType } from '../Action/Action';

export const Card = () => (
  <div className={cardStyles.Card}>
    <img className={cardStyles.image} src={image}/>
    <p className={cardStyles.description}>la qualité sans compromis ?</p>
    <div className={cardStyles.actions}>
      <Action type={ActionType.YES}/>
      <Action type={ActionType.NO}/>
    </div>
  </div>
);
