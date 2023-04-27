import inquirer from "inquirer";

export default async function inputAnswer() {
  const answer = await inquirer.prompt({
    name: "answer",
    type: "input",
    message: "What is your answer?",
    default() {
      return 0;
    },
  });

  return answer.answer;
}
