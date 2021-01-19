import shuffle from "./shuffle";

const importantSize = 10;
const funSize = 10;

const mapItem = ({ question, important, response }) => ({
  question,
  important: important === "OUI",
  response: response === "❤",
});

export default (data) => {
  const important = [];
  const fun = [];

  data.forEach((item) => (item.important ? important : fun).push(mapItem(item)));

  return shuffle([
    ...shuffle(important).slice(0, importantSize),
    ...shuffle(fun).slice(0, funSize),
  ]);
};
