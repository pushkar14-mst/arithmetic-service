const add = require("../arithmetica").add;
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
test("adds 290439035 + 349573457 to equal 640012492", () => {
  expect(add(290439035, 349573457)).toBe(640012492);
});
test("adds 0 + 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});
test("adds -1 + 1 to equal 0", () => {
  expect(add(-1, 1)).toBe(0);
});
