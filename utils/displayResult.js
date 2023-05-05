import figlet from "figlet";
import gradient from "gradient-string";
import quizSelector from "../lib/quizSelector.js";

export default async function displayResult(result) {
  console.clear();

  figlet(result ? "Correct, keep going!" : "Wrong, retry!", (err, data) => {
    console.log(gradient.instagram.multiline(data));
  });

  if (result)
    setTimeout(() => {
      quizSelector();
    }, 500);
}
