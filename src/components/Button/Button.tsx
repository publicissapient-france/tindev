import * as React from 'react';
import buttonStyles from './Button.module.scss';

export const Button = ({ children }) => (
  <button className={buttonStyles.Button}>{children}</button>
);
