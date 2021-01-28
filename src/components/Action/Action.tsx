import React, { FunctionComponent } from 'react';

import noImg from '../../images/button-no.svg';
import yesImg from '../../images/button-yes.svg';
import styles from './Action.module.scss';

export enum ActionType {
  YES,
  NO
}

export interface ActionProps {
  type: ActionType;
}

export const Action: FunctionComponent<ActionProps> = ({ type }) => (
  <button className={styles.action}>
    {type === ActionType.YES && <img className={styles.yes} src={yesImg} alt="oui" />}
    {type === ActionType.NO && <img className={styles.no} src={noImg} alt="non" />}
  </button>
);
