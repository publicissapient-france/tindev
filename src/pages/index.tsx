import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import indexStyles from './index.module.scss';

const IndexPage: FunctionComponent = () =>
  <Layout header={<Header withBackground />} footer={<Footer />}>
    <div className={indexStyles.index}>
      <div className={indexStyles.content}>
        <div className={indexStyles.welcome}>
          Découvrez si vous êtes<br />
          notre prochain <span className={indexStyles.welcomeBig}>match !</span>
        </div>
        <Link to={'/play'}>
          <Button>c'est parti !</Button>
        </Link>
      </div>
    </div>
  </Layout>

export default IndexPage;
