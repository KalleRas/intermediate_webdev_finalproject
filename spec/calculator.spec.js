const { calculateInterest } = require("../script.js");

describe("Interest Rate Calculator", () => {
  it("calculates simple interest and total amount correctly", () => {
    const result = calculateInterest(1000, 5, 2);
    expect(result.simpleInterest).toBe(100);
    expect(result.amount).toBe(1100);
  });

  it("converts string inputs to numbers before calculating", () => {
    const result = calculateInterest("1000", "5", "2");
    expect(result.simpleInterest).toBe(100);
    expect(result.amount).toBe(1100);
  });
});
