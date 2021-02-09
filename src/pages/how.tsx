import React, { FunctionComponent } from 'react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Page } from '../components/Page/Page';
import { Modal } from '../components/Modal/Modal';
import How from '../images/how.svg';
import Close from '../images/close.svg';
import styles from './how.module.scss';
import { Link } from 'gatsby';

const HowPage: FunctionComponent = () =>
  <Page>
    <Header withBackground/>
    <Modal>
      <Link to="/"><img className={styles.close} src={Close} alt="fermer l'explication"/></Link>
      <h1 className={styles.title}>comment ça marche&nbsp;?</h1>
      <p className={styles.paragraph}>Vous avez 20 cartes pour matcher !</p>
      <p className={styles.paragraph}>Chaque carte comporte une phrase en lien avec la tech.</p>
      <p className={styles.paragraph}>Vous êtes d’accord, aimez ce que vous lisez ?<br/>Swipez à droite ou cliquez sur
        le cœur.</p>
      <p className={styles.paragraph}>Au contraire, ce que vous lisez ne vous plaît pas ?<br/>À gauche toute&nbsp;! ou
        cliquez sur la croix.</p>
      <img className={styles.image} src={How} alt="représentation du swipe; à droite : j'aime; à gauche je n'aime pas"/>
    </Modal>
    <div className={styles.footer}>
      <Footer/>
    </div>
  </Page>;

export default HowPage;
