import * as React from "react";

import Data from "../data/data";

import Playground from '../components/Playground/Playground';

const PlaygroundWithData = Data(Playground);

const IndexPage = () => <PlaygroundWithData></PlaygroundWithData>;

export default IndexPage;
