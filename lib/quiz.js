import inquirer from "inquirer";

export default async function quizSelector() {
  const operation = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "Which operation?",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  });

  const difficulty = await inquirer.prompt({
    name: "difficulty",
    type: "list",
    message: "Which difficulty",
    choices: ["Easy", "Medium", "Hard"],
  });

  console.log(operation.operation, difficulty.difficulty);
}
