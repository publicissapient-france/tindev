import { DataItem } from '../data.model';
import shuffle from './shuffle';

const importantSize = 10;
const funSize = 10;

if (importantSize % 2) {
  throw new Error('Expect "importantSize" should be an even number!');
}

const mapItem = ({ question, important, response }: any): DataItem => ({
  question,
  important: important === "OUI",
  response: response === "❤",
});

export default (data: any): DataItem[] => {
  const fun: DataItem[] = [];
  const importantYes: DataItem[] = [];
  const importantNo: DataItem[] = [];

  data.forEach((item: any) => {
    const mappedItem = mapItem(item);
    (!mappedItem.important ? fun : mappedItem.response ? importantYes : importantNo).push(mappedItem);
  });

  return shuffle([
    ...shuffle(fun).slice(0, funSize),
    ...shuffle(importantYes).slice(0, importantSize / 2),
    ...shuffle(importantNo).slice(0, importantSize / 2),
  ]);
};
