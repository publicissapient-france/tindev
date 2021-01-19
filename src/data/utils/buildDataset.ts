import { DataItem } from "../data.model";
import shuffle from "./shuffle";

const importantSize = 10;
const funSize = 10;

const mapItem = ({ question, important, response }: any): DataItem => ({
  question,
  important: important === "OUI",
  response: response === "❤",
});

export default (data: any): DataItem[] => {
  const important: DataItem[] = [];
  const fun: DataItem[] = [];

  data.forEach((item: any) =>
    (item.important ? important : fun).push(mapItem(item))
  );

  return shuffle([
    ...shuffle(important).slice(0, importantSize),
    ...shuffle(fun).slice(0, funSize),
  ]);
};
