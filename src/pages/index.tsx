import React from 'react';
import '../styles.scss';
import indexStyles from './index.module.scss';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { Link } from 'gatsby';
import { Footer } from '../components/Footer/Footer';

export default function IndexRoute() {
  return (
    <div className={indexStyles.Index}>
      <Header background={true}/>
      <div className={indexStyles.welcomeMessage}>
        Découvrez si vous êtes<br/>notre prochain
        <span className={indexStyles.welcomeMessageBig}>match !</span>
      </div>
      <Link to={'/play'}>
        <Button>c'est parti !</Button>
      </Link>
      <Footer isDark/>
    </div>
  );
}
