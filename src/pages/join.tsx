import { navigate } from 'gatsby';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { Button } from '../components/Button/Button';
import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import { Page } from '../components/Page/Page';
import slackImg from '../images/slack.svg';
import { checkJoinOnce } from '../services/security';
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
    <Page>
      <Layout header={<Header withBackground={true}/>} footer={<Footer/>}>
        <Center>
          <div className={styles.join}>
            <Heading title={['Faisons connaissance !']}/>
            <Button outboundLink linkTo={process.env.GATSBY_SLACK_INVITATION} icon={slackImg}>
              Commencer à discuter
            </Button>
            <br/>
            <br/>
          </div>
        </Center>
      </Layout>
    </Page>
  ) : null;
};

export default JoinPage;
