import React, { FunctionComponent } from 'react';

import { Button } from '../components/Button/Button';
import { Center } from '../components/Center/Center';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Heading } from '../components/Heading/Heading';
import { Layout } from '../components/Layout/Layout';

const JoinPage: FunctionComponent = () => (
  <Layout header={<Header withBackground={true} />} footer={<Footer />}>
    <Center>
      <Heading title={['Faisons connaissance !']} />
      <Button>Commencer à discuter</Button>
    </Center>
  </Layout>
);

export default JoinPage;
