// function Hello() {
//   console.log("Hello");
// }

// function Bye() {
//   console.log("Bye");
// }

// 1 == 2 ? Hello() : Bye();

// let Uname = console.prompt("What is your name: ");
// let Usurname = console.prompt("What is your surname: ");
// let Ucolor = console.prompt("What is your color: ");
// let Urace = console.prompt("What is your race: ");

// const UserOne = {
//   surname: Usurname,
//   name: Uname,
//   complexion: Ucolor,
//   race: Urace,
// };
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your input: ", (userInput) => {
  console.log(`You entered: ${userInput}`);
  rl.close();
});
