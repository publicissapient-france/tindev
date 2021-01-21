export interface DataItem {
  question: string;
  important: boolean;
  response: boolean;
}

export type Answer = (item: DataItem, answer: boolean) => void;
