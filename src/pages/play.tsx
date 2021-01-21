import { navigate, StaticQuery } from 'gatsby';
import React, { FunctionComponent, useState } from 'react';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Wave } from '../components/Wave/Wave';
import { dataQuery } from '../data/data';
import { Answer, DataItem } from '../data/data.model';
import buildDataset from '../data/utils/buildDataset';

const goodAnswers = 5;
const badAnswers = 5;

const debug = (good: number, bad: number, answer: boolean, item: DataItem) => {
  console.log(
    `${good} / ${bad}`,
    item.important ? 'IMPORTANT.' : 'FUN.',
    answer === item.response ? 'Good.' : 'Bad.',
    item.question
  );
};

const PlayPage: FunctionComponent = () => {
  const [good, increaseGood] = useState(0);
  const [bad, increaseBad] = useState(0);

  const onAnswer: Answer = (item, answer) => {
    if (!item.important) {
      debug(good, bad, answer, item);
      return;
    }
    if (item.response === answer) {
      if (good + 1 < goodAnswers) {
        increaseGood(good + 1);
      } else {
        setTimeout(() => navigate('/match'), 500);
      }
      debug(good + 1, bad, answer, item);
    } else {
      if (bad + 1 < badAnswers) {
        increaseBad(bad + 1);
      } else {
        setTimeout(() => {
          alert('You freaking me!');
          navigate('/'); // TODO: Create page for loosers...
        }, 500);
      }
      debug(good, bad + 1, answer, item);
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
      <Wave />
      {deckWithData}
    </Layout>
  );
};

export default PlayPage;
