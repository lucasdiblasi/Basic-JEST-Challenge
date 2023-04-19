const { div } = require('../scenario/div');

const numerator = 8;
const denominator = 4;
const zero = 0;
const invalidDivisor = "a";

test("Div Function test", () => {

  expect(div(numerator, denominator)).toBe(numerator / denominator);
  expect(div(0, denominator)).toBe(0);
  expect(div(-numerator, -denominator)).toBe(numerator / denominator);
  expect(div(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
    
 });

test("Division test with zero divisor", () => {
    expect(() => div(numerator, zero)).toThrow("Divisor cannot be zero!");
});

test("Edge tests", () => {
    expect(() => div(numerator, invalidDivisor)).toThrow('Invalid divisor value!');
});

test("Tests with destructuring", () => {
    const [numerator, denominator] = [8,4];
     expect(div(...[numerator, denominator])).toBeCloseTo(numerator / denominator);
});
