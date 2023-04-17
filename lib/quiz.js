import inquirer from "inquirer";

export default async function quiz() {
  const operation = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "Which operation?",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  });

  console.log(operation.operation);
}
