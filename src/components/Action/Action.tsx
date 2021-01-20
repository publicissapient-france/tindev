import React from 'react';
import yes from '../../images/yes.svg';
import no from '../../images/no.svg';
import actionStyles from './Action.module.scss';

export enum ActionType {
  YES,
  NO
}

type Props = { type: ActionType };

export const Action = ({ type }: Props) => (
  <button className={actionStyles.Action}>
    {type === ActionType.YES && <img className={actionStyles.yes} src={yes} alt="oui"/>}
    {type === ActionType.NO && <img className={actionStyles.no} src={no} alt="non"/>}
  </button>
);
