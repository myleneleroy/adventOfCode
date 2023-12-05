const fs = require("fs");

var data = fs.readFileSync("games.txt").toString();

const lines = data.split("\n");

let total = 0;
let game = [];

for (j in lines) {
  const table = lines[j].split(/,|;|:/);

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

game.forEach((v, i) => {
  total += Math.max(...v.blue) * Math.max(...v.green) * Math.max(...v.red);
});

console.log(total);
