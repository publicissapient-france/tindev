import React, { FunctionComponent, useState } from 'react';
import { animated, interpolate, useSprings } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import { Answer, DataItem } from '../../data/data.model';
import { Card } from '../Card/Card';
import styles from './Deck.module.scss';

const to = (i: number) => ({ x: 0, y: i * -4, scale: 1, rot: -5 + Math.random() * 10, delay: i * 50 });
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: number) => `rotateY(${r / 20}deg) rotateZ(${r}deg) scale(${s})`;

export interface DeckProps {
  data: DataItem[];
  onAnswer?: Answer;
}

export const Deck: FunctionComponent<DeckProps> = ({ data, onAnswer }) => {
  const [cards] = useState(() => [...Array(data.length)].map(() => ({})));
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from() }));

  const bind = useGesture(({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
    const trigger = velocity > .2;
    const dir = xDir < 0 ? -1 : 1;
    const isGone = gone.has(index);
    if (isGone) {
      return;
    }
    if (!down && trigger) {
      onAnswer?.(data[index], dir === 1, index === 0);
      gone.add(index);
    }
    // Note: TS compiler says that the function provided to `set` is not valid.
    // But actually, everything works fine.
    // It might be a missing typing...
    set((i: number) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
  });

  const swipeOut = ((index: number, dir: number) => (i: number) => {
    if (index !== i) return;
    onAnswer?.(data[index], dir === 1, index === 0);
    gone.add(index);
    const x = (200 + window.innerWidth) * dir;
    const rot = 30;
    const scale = 1.1;
    return { x, rot, scale, delay: undefined, config: { friction: 50, tension: 200 } };
  });

  const isOnClick = (index: number, down: boolean | undefined, velocity: number) => !gone.has(index) && down && velocity === 0;

  const yesBind = useGesture(({ args: [index], down, velocity }) => {
    if (isOnClick(index, down, velocity)) {
      set(swipeOut(index, 1));
    }
  });

  const noBind = useGesture(({ args: [index], down, velocity }) => {
    if (isOnClick(index, down, velocity)) {
      set(swipeOut(index, -1));
    }
  });

  // WARNING: Don't use a `<div>` as wrapping element!
  // The CSS class `.deck` is simply not present when reloading the page!
  // For no reason, it works fine when using another element like `<section>`.
  return (
    <section className={styles.deck}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ transform: interpolate([x, y], (x: number, y: number) => `translate3d(${x}px,${y}px,0)`) }}>
          <animated.div {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans)
            }}>
            <Card data={data[i]} onYes={yesBind(i)} onNo={noBind(i)} />
          </animated.div>
        </animated.div>
      ))}
    </section>
  );
};
