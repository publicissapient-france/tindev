import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

import buildDataset from './utils/buildDataset';

export default (Component) => () => (
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
