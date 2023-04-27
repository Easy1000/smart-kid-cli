import randomNumberGenerator from "./randomNumberGenerator.js";

export default async function generateSetQuestion() {
  let easyQuestion = randomNumberGenerator(20);
  let mediumQuestion = randomNumberGenerator(50);
  let hardQuestion = randomNumberGenerator(100);

  return { easyQuestion, mediumQuestion, hardQuestion };
}
