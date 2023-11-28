export function getRandomInt(min: number, max: number): string {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}
