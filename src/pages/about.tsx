import React, {FunctionComponent} from 'react';

import {Footer} from '../components/Footer/Footer';
import {Header} from '../components/Header/Header';
import {Page} from '../components/Page/Page';
import {Modal} from '../components/Modal/Modal';
import {Layout} from '../components/Layout/Layout';
import {Button} from "../components/Button/Button";
import aboutImg from '../images/about.svg';

const AboutPage: FunctionComponent = () =>
  <Page>
    <Layout header={<Header withBackground/>} footer={<Footer/>}/>
    <Modal>
      <article className="modal-container">
        <h1 className="modal-title">
          Qui sommes-nous&nbsp;?
        </h1>
        <p className="modal-paragraph">
          Publicis Sapient est le partenaire des transformations numériques.
          Notre mission&nbsp;: mettre notre passion au service d’un impact durable.
        </p>
        <p className="modal-paragraph">
          Technologie, Data Science, Consulting, Design &amp; Experience&nbsp;:
          nous joignons nos forces pour créer, avec nos clients,
          les meilleurs produits et bâtir un lieu où la collaboration entre les métiers de la stratégie,
          de la créativité et du développement agile «&nbsp;done right&nbsp;» est possible.
        </p>
        <p className="modal-paragraph">
          Solution globale au sein du Groupe Publicis,
          nos 300 Sapient France accompagnent localement
          nos clients avec la force du réseau mondial de Sapient
          et le Power of One Publicis.<br/>
          <a href="https://www.publicissapient.fr" className="modal-link">www.publicissapient.fr</a>
        </p>
        <p className="modal-paragraph">
          <Button isMini linkTo="https://blog.engineering.publicissapient.fr/">Visitez notre blog</Button>
        </p>
      </article>
      <footer className="modal-container modal-container--with-space">
        <img className="modal-image modal-image--sm" src={aboutImg} alt=""/>
      </footer>
    </Modal>
  </Page>;

export default AboutPage;
