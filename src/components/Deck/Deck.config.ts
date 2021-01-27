const angle = typeof window !== `undefined` && window.matchMedia("(min-width: 480px)").matches ? 5 : 0;

const rotRandom = Array(100).fill(0).map(() => -angle + Math.random() * angle * 2);

export const to = (i: number) => ({
  x: 0,
  y: -i,
  rot: rotRandom[i],
  scale: 1,
  delay: i * 50,
});

export const from = (i: number) => ({
  x: 0,
  y: -1000,
  rot: rotRandom[i],
  scale: 1,
});

export const trans = (r: number, s: number) => `rotateY(${r / 20}deg) rotateZ(${r}deg) scale(${s})`;
