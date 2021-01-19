export default function shuffle<T>(data: T[]) {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const item = data[i];
    data[i] = data[j];
    data[j] = item;
  }
  return data;
}
