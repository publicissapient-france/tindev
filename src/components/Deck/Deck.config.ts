const angle = typeof window !== `undefined` && window.matchMedia("(min-width: 480px)").matches ? 5 : 0;

export const to = (i: number) => ({
  x: 0,
  y: -i,
  scale: 1,
  rot: -angle + Math.random() * angle * 2,
  delay: i * 50,
});

export const from = () => ({
  x: 0,
  y: -1000,
  scale: 1.5,
  rot: 0,
});

export const trans = (r: number, s: number) => `rotateY(${r / 20}deg) rotateZ(${r}deg) scale(${s})`;
