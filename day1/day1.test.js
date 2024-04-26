const fs = require("fs");
const main = require("./day1");
jest.mock("fs");

test("counts increases correctly", () => {
  fs.readFileSync.mockReturnValue("102\n112\n122\n130\n140\n150\n160\n");
  const { count1, count2 } = main();
  expect(count1).toBe(6);
  expect(count2).toBe(4);
});
