import figlet from "figlet";
import gradient from "gradient-string";

export default async function displayQuestion(
  difficulty,
  easyQuestion,
  mediumQuestion,
  hardQuestion
) {
  figlet(
    difficulty === "Easy"
      ? easyQuestion.question
      : difficulty === "Medium"
      ? mediumQuestion.question
      : hardQuestion.question,
    (err, data) => {
      console.log(gradient.instagram.multiline(data));
    }
  );
}
