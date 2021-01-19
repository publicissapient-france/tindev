import shuffle from "./shuffle";

const importantSize = 10
const funSize = 10;

export default (data) => {
  const important = [];
  const fun = [];

  data.forEach((item) => (item.important ? important : fun).push(item));

  return shuffle([
    ...shuffle(important).slice(0, importantSize),
    ...shuffle(fun).slice(0, funSize),
  ]);
};
