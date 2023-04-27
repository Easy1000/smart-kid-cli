export default function randomNumberGenerator(range) {
  const operandOne = Math.floor(Math.random() * range);
  const operandTwo = Math.floor(Math.random() * range);

  return { operandOne, operandTwo };
}
