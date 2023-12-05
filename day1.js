const { match } = require("assert");
const { Console } = require("console");
const fs = require("fs");

var data = fs.readFileSync("input.txt").toString();

const lines = data.split("\n");

let total = 0;
let numbersStr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (j in lines) {
  m = {};

  for (ns in numbersStr) {
    let number = numbersStr[ns];
    const indexes = [...lines[j].matchAll(new RegExp(number, "gi"))].map(
      (a) => a.index
    );

    for (i in indexes) {
      m[indexes[i]] = parseInt(ns) + 1;
    }
  }

  for (n in numbers) {
    let number = numbers[n];
    const indexes = [...lines[j].matchAll(new RegExp(number, "gi"))].map(
      (a) => a.index
    );

    for (i in indexes) {
      m[indexes[i]] = parseInt(n) + 1;
    }
  }

  let min = Math.min(...Object.keys(m));
  let max = Math.max(...Object.keys(m));

  const A = parseInt(m[min]) * 10 + parseInt(m[max]);
  total += A;
}

console.log(total);
