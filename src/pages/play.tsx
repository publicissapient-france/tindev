import { navigate, StaticQuery } from 'gatsby';
import React, { FunctionComponent, useState } from 'react';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Match } from '../components/Match/Match';
import { Wave } from '../components/Wave/Wave';
import { dataQuery } from '../services/data';
import { Answer, DataItem } from '../services/data.model';
import buildDataset from '../services/utils/buildDataset';

const EXPECTED_COUNT = 7;

// TODO: this temporary code alows you to debug the App at runtime.
// Don't forget to remove it before going live...
const debug = (good: number, answer: boolean, item: DataItem) => {
  console.log(
    good,
    item.important ? 'IMPORTANT.' : 'FUN.',
    answer === item.response ? 'Good.' : 'Bad.',
    item.question
  );
};

const PlayPage: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const [match, setMatch] = useState(false);

  if (finish) {
    setTimeout(() => {
      if (count >= EXPECTED_COUNT) {
        setMatch(true);
      } else {
        navigate('/nomatch');
      }
    }, 500);
  }

  const onAnswer: Answer = (item, answer, isLast) => {
    if (item.important && item.response === answer) {
      setCount(count + 1);
      debug(count + 1, answer, item);
    } else {
      debug(count, answer, item);
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
    <Layout
      header={<Header withBackground={false} />}
      footer={<Footer withBackground />}
    >
      <Wave isSmall={finish} />
      {!match ? deckWithData : <Match />}
    </Layout>
  );
};

export default PlayPage;
