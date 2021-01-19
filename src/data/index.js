import data from "./data";
import shuffle from "./utils/shuffle";

const importantSize = 10;
const funSize = 10;

const important = [];
const fun = [];

data.forEach((item) => (item.important ? important : fun).push(item));

const getData = () =>
  shuffle([...shuffle(important).slice(0, importantSize), ...shuffle(fun).slice(0, funSize)]);

export default getData;
