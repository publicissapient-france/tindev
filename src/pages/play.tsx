import { graphql, navigate, PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Page } from '../components/Page/Page';
import { Wave } from '../components/Wave/Wave';
import { Answer, DataItem } from '../services/data.model';
import { authorizeJoin } from '../services/security';
import buildDataset from '../services/utils/buildDataset';

const EXPECTED_COUNT = 8;

export const query = graphql`
  query PlayQuery {
    allDataCsv {
      nodes {
        id
        question
        important
        response
      }
    }
  }`;

type PlayProps = PageProps & {
  data: {
    allDataCsv: {
      nodes: DataItem[];
    }
  }
}

const PlayPage = ({ data }: PlayProps) => {
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const [deck, setDeck] = useState<DataItem[]>([]);

  useEffect(() => {
    setDeck(buildDataset(data.allDataCsv.nodes));
  }, []);

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

  return (
    <Page>
      <Layout
        header={<Header withBackground={false}/>}
        footer={<Footer withBackground/>}
      >
        <Wave isSmall={finish}/>
        {deck.length > 0 && <Deck data={deck} onAnswer={onAnswer}/>}
      </Layout>
    </Page>
  );
};

export default PlayPage;
