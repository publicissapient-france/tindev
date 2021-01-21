import { Link } from 'gatsby';
import React from 'react';

import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import indexStyles from './index.module.scss';

const IndexRoute = () =>
  <Layout header={<Header background={true} />}>
    <div className={indexStyles.index}>
      <div className={indexStyles.content}>
        <div className={indexStyles.welcome}>
          Découvrez si vous êtes<br />notre prochain
              <span className={indexStyles.welcomeBig}>match !</span>
        </div>
        <Link to={'/play'}>
          <Button>c'est parti !</Button>
        </Link>
      </div>
    </div>
  </Layout>

export default IndexRoute;
