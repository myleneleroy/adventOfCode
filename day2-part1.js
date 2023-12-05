const fs = require("fs");

var data = fs.readFileSync("games.txt").toString();

const lines = data.split("\n");

let total = 0;
let game = [];

for (j in lines) {
  const table = lines[j].split(/,|;|:/);
  console.log(table);

  game[parseInt(j) + 1] = {};

  for (t in table) {
    game[parseInt(j) + 1].blue = table
      .filter((item) => item.includes("blue"))
      .map((item) => parseInt(item.replace(/\D/g, "")));

    game[parseInt(j) + 1].green = table
      .filter((item) => item.includes("green"))
      .map((item) => parseInt(item.replace(/\D/g, "")));

    game[parseInt(j) + 1].red = table
      .filter((item) => item.includes("red"))
      .map((item) => parseInt(item.replace(/\D/g, "")));
  }
}
console.log(game);

game.forEach((v, i) => {
  if (
    v.blue.every((el) => el <= 14) &&
    v.green.every((el) => el <= 13) &&
    v.red.every((el) => el <= 12)
  ) {
    console.log(total, i);

    total += i;
  }
});

console.log(total);
