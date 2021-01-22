import React from "react";

import { Data } from "../data/data";

import Playground from '../components/Playground/Playground';

const PlaygroundWithData = Data(Playground);

const PocPage = () => <PlaygroundWithData></PlaygroundWithData>;

export default PocPage;
