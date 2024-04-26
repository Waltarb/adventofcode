const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "map.txt")))
  .trim()
  .split("\n")
  .map((l) => l.trim().split(""));

const { length: height } = INPUT;
const [{ length: width }] = INPUT;

// Define the map of movements
const MAP = [
  [">", 0, 1], // Move right
  ["v", 1, 0], // Move down
];

// Start the performance timer
const pStart = performance.now();

// Initialize step counter and movement flag
let step = 0;
let mov = false;

// Loop until no more movements are made
do {
  // Increment step counter and reset movement flag
  step++ && (mov = false);

  // Iterate over the map of movements
  for (let i = 0; i < 2; i++) {
    // Create a copy of the input
    const g = INPUT.map((r) => r.map((c) => c));

    // Iterate over the rows and columns of the input
    for (let r = 0; r < height; r++)
      for (let c = 0; c < width; c++)
        // If the current cell matches the movement symbol and the destination cell is empty
        g[r][c] === MAP[i][0] &&
          g[(r + Number(MAP[i][1])) % height][
            (c + Number(MAP[i][2])) % width
          ] === "." &&
          // Set movement flag to true
          (mov = true) &&
          // Move the symbol to the destination cell
          (INPUT[(r + MAP[i][1]) % height][(c + MAP[i][2]) % width] =
            MAP[i][0]) &&
          // Set the current cell to empty
          (INPUT[r][c] = ".");
  }
} while (mov);

// The result is the number of steps taken
const RES = step;

// End the performance timer
const pEnd = performance.now();

// Print the result and the time taken
console.log("first step without sea cucumber: " + RES);
console.log(pEnd - pStart);
