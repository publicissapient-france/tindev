import { navigate } from 'gatsby';
import React, { FunctionComponent } from 'react';

import heartImg from '../../images/heart.svg';
import shineImg from '../../images/shine.svg';
import { Center } from '../Center/Center';
import { Heading } from '../Heading/Heading';
import styles from './Match.module.scss';

export const Match: FunctionComponent = () => {
  setTimeout(() => navigate('/join'), 3000);

  return (
    <Center>
      <img src={shineImg} alt="" className={styles.shine} />
      <Heading title={['It\'s a']} subtitle={['match']} subtitleSize="lg" />
      <img src={heartImg} alt="coeur" />
    </Center>
  );
}
