export interface DataItem {
  id: string;
  question: string;
  important: boolean;
  response: boolean;
}

export type Answer = (item: DataItem, answer: boolean, isLast: boolean) => void;
