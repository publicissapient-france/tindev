import * as React from 'react';
import { Header } from '../components/Header/Header';
import { Deck } from '../components/Deck/Deck';

export default function () {
  return (
    <>
      <Header background={false}/>
      <Deck/>
    </>
  );
}
