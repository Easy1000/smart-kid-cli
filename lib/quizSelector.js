import inquirer from "inquirer";
import addition from "./modesOfOperation/addition.js";
import subtraction from "./modesOfOperation/subtraction.js";
import multiplication from "./modesOfOperation/multiplication.js";
import division from "./modesOfOperation/division.js";

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

  console.clear();

  if (operation.operation === "Addition")
    return addition(difficulty.difficulty);
  if (operation.operation === "Subtraction")
    return subtraction(difficulty.difficulty);
  if (operation.operation === "Multiplication")
    return multiplication(difficulty.difficulty);
  if (operation.operation === "Division")
    return division(difficulty.difficulty);
}
