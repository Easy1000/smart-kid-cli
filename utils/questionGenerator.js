export default function questionGenerator(
  easyQuestion,
  mediumQuestion,
  hardQuestion,
  operator
) {
  easyQuestion.question =
    easyQuestion.operandOne + operator + easyQuestion.operandTwo;
  mediumQuestion.question =
    mediumQuestion.operandOne + operator + mediumQuestion.operandTwo;
  hardQuestion.question =
    hardQuestion.operandOne + operator + hardQuestion.operandTwo;

  return { easyQuestion, mediumQuestion, hardQuestion };
}
