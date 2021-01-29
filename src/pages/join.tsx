import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import { Button } from '../components/Button/Button';
import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import slackImg from '../images/slack.svg';
import { checkJoinOnce } from '../services/security';
import favicon from '../images/favicon.png';
import styles from './join.module.scss';

const JoinPage: FunctionComponent = () => {
  const [join, setJoin] = useState<boolean>();
  if (join === false) {
    navigate('/');
  }

  useEffect(() => {
    setJoin(checkJoinOnce());
  }, []);

  return join ? (
    <>
      <Helmet>
        <title>TinDev: Be the next match</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Layout header={<Header withBackground={true} />} footer={<Footer />}>
        <Center>
          <div className={styles.join}>
            <Heading title={['Faisons connaissance !']} />
            <Button icon={slackImg}>Commencer à discuter</Button><br /><br />
          </div>
        </Center>
      </Layout>
    </>
  ) : null;
}

export default JoinPage;
