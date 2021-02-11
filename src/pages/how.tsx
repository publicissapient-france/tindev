import React, {FunctionComponent} from 'react';

import {Footer} from '../components/Footer/Footer';
import {Header} from '../components/Header/Header';
import {Page} from '../components/Page/Page';
import {Modal} from '../components/Modal/Modal';
import {Layout} from '../components/Layout/Layout';
import howImg from '../images/how.svg';

const HowPage: FunctionComponent = () =>
  <Page>
    <Layout header={<Header withBackground/>} footer={<Footer/>}/>
    <Modal>
      <article className="modal-container">
        <h1 className="modal-title">
          Comment ça marche&nbsp;?
        </h1>
        <p className="modal-paragraph">
          Vous avez 20 cartes pour matcher&nbsp;!
        </p>
        <p className="modal-paragraph">
          Chaque carte comporte une phrase en lien avec la tech.
        </p>
        <p className="modal-paragraph">
          Vous êtes d’accord, aimez ce que vous lisez&nbsp;?<br/>
          Swipez à droite ou cliquez sur le cœur.
        </p>
        <p className="modal-paragraph">
          Au contraire, ce que vous lisez ne vous plaît pas&nbsp;?<br/>
          À gauche toute&nbsp;! ou cliquez sur la croix.
        </p>
      </article>
      <footer className="modal-container">
        <img className="modal-image" src={howImg}
             alt="représentation du swipe; à droite : j'aime; à gauche je n'aime pas"/>
      </footer>
    </Modal>
  </Page>;

export default HowPage;
