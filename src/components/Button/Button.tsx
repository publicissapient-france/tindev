import React, { FunctionComponent } from 'react';
import buttonStyles from './Button.module.scss';

export const Button: FunctionComponent = ({ children }) => (
  <button className={buttonStyles.Button}>{children}</button>
);
