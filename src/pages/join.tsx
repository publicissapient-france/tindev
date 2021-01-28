import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';
import slackImg from '../images/slack.svg';

const JoinPage: FunctionComponent = () => (
  <Layout header={<Header withBackground={true} />} footer={<Footer />}>
    <Center>
      <Heading title={['Faisons connaissance !']} />
      <Button icon={slackImg}>Commencer à discuter</Button><br /><br />
    </Center>
  </Layout>
);

export default JoinPage;
