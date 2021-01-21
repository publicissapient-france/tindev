// Based on: https://codesandbox.io/s/fduch?file=/src/index.js

import React, { useState } from 'react';
import { animated, to as interpolate, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { Card } from '../Card/Card';
import deckStyles from './Deck.module.scss';

const to = (i: number) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 50 });
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: number) => `rotateY(${r / 20}deg) rotateZ(${r}deg) scale(${s})`;

const cards = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];

export const Deck = () => {
  const [gone] = useState(() => new Set());

  const [springs, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from() }));

  const bind = useDrag(({
    args: [index],
    down,
    movement: [mx],
    direction: [xDir],
    velocity
  }) => {
    const trigger = velocity > .2;
    const dir = xDir < 0 ? -1 : 1;
    let isGone = gone.has(index);
    if (isGone) {
      return;
    }
    if (!down && trigger) {
      gone.add(index);
    }
    set(i => {
      if (index !== i) return;
      isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
  }, { filterTaps: true });

  const swipeOut = (index: number, dir: number) => (i: number) => {
    if (index !== i) return;
    gone.add(index);
    const x = (200 + window.innerWidth) * dir;
    const rot = 30;
    const scale = 1.1;
    return { x, rot, scale, delay: undefined, config: { friction: 50, tension: 200 } };
  };

  const isOnClick = (index: number, down: boolean, velocity: number) => !gone.has(index) && down && velocity === 0;

  const yesBind = useDrag(({ args: [index], down, velocity }) => {
    if (isOnClick(index, down, velocity)) {
      set(swipeOut(index, 1));
    }
  });

  const noBind = useDrag(({ args: [index], down, velocity }) => {
    if (isOnClick(index, down, velocity)) {
      set(swipeOut(index, -1));
    }
  });

  return (
    <div className={deckStyles.deck}>
      {springs.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ transform: interpolate([x, y], (x1, y1) => `translate3d(${x1}px,${y1}px,0)`) }}>
          <animated.div {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans)
            }}>
            <Card onYes={yesBind(i)} onNo={noBind(i)} />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
