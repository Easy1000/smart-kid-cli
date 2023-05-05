import generateSetQuestion from "../../utils/generateSetQuestion.js";
import difficultyScaling from "../../utils/difficultyScaling.js";
import questionGenerator from "../../utils/questionGenerator.js";
import displayQuestion from "../../utils/displayQuestion.js";
import inputAnswer from "../../utils/inputAnswer.js";
import displayResult from "../../utils/displayResult.js";

export default async function subtraction(
  difficulty,
  easyQuestion,
  mediumQuestion,
  hardQuestion
) {
  console.clear();

  const operator = " - ";

  if (easyQuestion === undefined) {
    ({ easyQuestion, mediumQuestion, hardQuestion } =
      await generateSetQuestion());

    // Scaling the range of each difficulties
    ({ mediumQuestion, hardQuestion } = difficultyScaling(
      mediumQuestion,
      hardQuestion
    ));

    // Generate the actual question
    ({ easyQuestion, mediumQuestion, hardQuestion } = questionGenerator(
      easyQuestion,
      mediumQuestion,
      hardQuestion,
      operator
    ));
  }

  await displayQuestion(difficulty, easyQuestion, mediumQuestion, hardQuestion);

  const answer = await inputAnswer();

  let result = false;
  const questionList = [easyQuestion, mediumQuestion, hardQuestion];
  for (let question of questionList) {
    if (Number(answer) === question.operandOne - question.operandTwo) {
      result = true;
      displayResult(result);
      break;
    }
  }
  if (!result) {
    displayResult(result);
    setTimeout(() => {
      subtraction(difficulty, easyQuestion, mediumQuestion, hardQuestion);
    }, 1000);
  }
}
