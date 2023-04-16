import figlet from "figlet";
import gradient from "gradient-string";

export async function introduction() {
  figlet("Smart Kid", (err, data) => {
    console.log(gradient.instagram.multiline(data));
    console.log(`
  Smart Kid is a math quiz for kids to practice their math.
  This quiz is presented in the form of CLI.
    `);
  });
}
