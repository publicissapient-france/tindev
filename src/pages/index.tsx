import React from 'react';
import '../styles.scss';
import indexStyles from './index.module.scss';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { Link } from 'gatsby';

export default function IndexRoute() {
  return (
    <div className={indexStyles.index}>
      <div className={indexStyles.header}>
        <Header background={true}/>
      </div>
      <main className={indexStyles.main}>
        <div className={indexStyles.content}>
          <div className={indexStyles.welcome}>
            Découvrez si vous êtes<br/>notre prochain
            <span className={indexStyles.welcomeBig}>match !</span>
          </div>
          <Link to={'/play'}>
            <Button>c'est parti !</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
