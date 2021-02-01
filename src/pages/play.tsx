import { graphql, navigate, PageProps } from 'gatsby';
import React, { useState } from 'react';

import { Deck } from '../components/Deck/Deck';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Page } from '../components/Page/Page';
import { Wave } from '../components/Wave/Wave';
import { Answer } from '../services/data.model';
import { authorizeJoin } from '../services/security';
import buildDataset from '../services/utils/buildDataset';

const EXPECTED_COUNT = 8;

type Props = PageProps & {
  data: {
    allDataCsv: {
      nodes: []
    }
  }
}

const PlayPage = ({ data }: Props) => {
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

  const [deck] = useState(() => buildDataset(data.allDataCsv.nodes));

  return (
    <Page>
      <Layout
        header={<Header withBackground={false}/>}
        footer={<Footer withBackground/>}
      >
        <Wave isSmall={finish}/>
        <Deck data={deck} onAnswer={onAnswer}/>
      </Layout>
    </Page>
  );
};

export const query = graphql`
  query PlayQuery {
    allDataCsv {
      nodes {
        question
        important
        response
      }
    }
  }`;

export default PlayPage;
