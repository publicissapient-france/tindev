import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DataItem } from './data.model';
import buildDataset from './utils/buildDataset';

export default (Component: React.FunctionComponent<{ data: DataItem[] }>) => () => (
  <StaticQuery
    query={graphql`
      query AllData {
        allDataCsv {
          nodes {
            question
            important
            response
          }
        }
      }
    `}
    render={(allData) => <Component data={buildDataset(allData.allDataCsv.nodes)}></Component>}
  />
);
