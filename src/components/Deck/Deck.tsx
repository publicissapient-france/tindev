import * as React from 'react';
import { animated, interpolate, useSprings } from 'react-spring';
import { useState } from 'react';
import { useGesture } from 'react-use-gesture';
import './Deck.scss';
import { Card } from '../Card/Card';

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 50 });
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `rotateY(${r / 20}deg) rotateZ(${r}deg) scale(${s})`;

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

  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from() }));

  const bind = useGesture(({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
    const trigger = velocity > .2;
    const dir = xDir < 0 ? -1 : 1;
    const isGone = gone.has(index);
    if (isGone) {
      return;
    }
    if (!down && trigger) {
      gone.add(index);
    }
    set(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
  });

  const swipeOut = (index: number, dir: number) => i => {
    if (index !== i) return;
    gone.add(index);
    const x = (200 + window.innerWidth) * dir;
    const rot = 30;
    const scale = 1.1;
    return { x, rot, scale, delay: undefined, config: { friction: 50, tension: 200 } };
  };

  const isOnClick = (index, down: boolean, velocity: number) => !gone.has(index) && down && velocity === 0;

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

  return (
    <div className="Deck">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          <animated.div {...bind(i)}
                        style={{
                          transform: interpolate([rot, scale], trans)
                        }}>
            <Card onYes={yesBind(i)} onNo={noBind(i)}/>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
