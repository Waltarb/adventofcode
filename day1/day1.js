const fs = require("fs");

function main() {
  const depths = fs
    .readFileSync("./input.txt")
    .toString()
    .split("\n")
    .map((n) => parseInt(n, 10));

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < depths.length; i++) {
    if (i > 0 && depths[i] > depths[i - 1]) {
      count1++;
    }

    if (
      i >= 3 &&
      depths[i] + depths[i - 1] + depths[i - 2] >
        depths[i - 1] + depths[i - 2] + depths[i - 3]
    ) {
      count2++;
    }
  }
  console.log(count1, count2);
  return { count1, count2 };
}

module.exports = main;
