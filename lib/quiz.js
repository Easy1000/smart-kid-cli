import inquirer from "inquirer";

export default async function quiz() {
  const operation = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "Which operation?",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  });

  return difficulty(operation.operation);
}

async function difficulty(operation) {
  const difficulty = await inquirer.prompt({
    name: "difficulty",
    type: "list",
    message: "Which difficulty",
    choices: ["Easy", "Medium", "Hard"],
  });

  console.log(operation, difficulty.difficulty);
}
