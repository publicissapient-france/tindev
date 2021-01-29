import { navigate, StaticQuery } from 'gatsby';
import React, { FunctionComponent, useState } from 'react';
import Helmet from 'react-helmet';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import { dataQuery } from '../services/data';
import { Answer } from '../services/data.model';
import { authorizeJoin } from '../services/security';
import buildDataset from '../services/utils/buildDataset';

const EXPECTED_COUNT = 8;

const PlayPage: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);

  if (finish) {
    const isMatch = count >= EXPECTED_COUNT;
    if (isMatch) {
      authorizeJoin();
    }
    setTimeout(() => navigate(isMatch ? '/match' : '/nomatch'), 500);
  }

  const onAnswer: Answer = (item, answer, isLast) => {
    if (item.important && item.response === answer) {
      setCount(count + 1);
    }
    if (isLast) {
      setFinish(true);
    }
  };

  const deckWithData = <StaticQuery
    query={dataQuery}
    render={(allData) => {
      const [data] = useState(() => buildDataset(allData.allDataCsv.nodes));
      return <Deck data={data} onAnswer={onAnswer} />;
    }}
  />;

  return (
    <>
      <Helmet>
        <title>TinDev</title>
      </Helmet>
      <Layout
        header={<Header withBackground={false} />}
        footer={<Footer withBackground />}
      >
        <Wave isSmall={finish} />
        {deckWithData}
      </Layout>
    </>
  );
};

export default PlayPage;
