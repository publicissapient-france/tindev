import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DataItem } from './data.model';
import buildDataset from './utils/buildDataset';

export const dataQuery = graphql`
  query AllData {
    allDataCsv {
      nodes {
        question
        important
        response
      }
    }
  }`;

export const Data = (Component: React.FunctionComponent<{ data: DataItem[] }>) => () => (
  <StaticQuery
    query={dataQuery}
    render={(allData) => <Component data={buildDataset(allData.allDataCsv.nodes)}></Component>}
  />
);
