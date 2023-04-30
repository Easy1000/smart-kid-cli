import figlet from "figlet";
import gradient from "gradient-string";
import quizSelector from "../lib/quizSelector.js";

export default async function displayResult(result) {
  figlet(result ? "Correct" : "Wrong", (err, data) => {
    console.log(gradient.instagram.multiline(data));
  });

  return quizSelector();
}
