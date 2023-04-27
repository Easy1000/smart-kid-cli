export default function difficultyScaling(mediumQuestion, hardQuestion) {
  mediumQuestion.operandOne += 20;
  mediumQuestion.operandTwo += 20;
  hardQuestion.operandOne += 70;
  hardQuestion.operandTwo += 70;

  return { mediumQuestion, hardQuestion };
}
