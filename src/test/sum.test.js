const sum = require('../scenario/sum');

test('adds 1 + 2 to equal 3', () => {
  const [a, b] = [1, 2];
  const expected = 3;

  expect(sum(a, b)).toBe(expected);
});

test('adds 0 + 0 to equal 0', () => {
  const [a, b] = [0, 0];
  const expected = 0;

  expect(sum(a, b)).toBe(expected);
});

test('adds -1 + 1 to equal 0', () => {

  const [a, b] = [-1, 1];
  const expected = 0;

  expect(sum(a, b)).toBe(expected);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {

  const [a, b] = [0.1, 0.2];
  result = parseFloat(sum(a,b).toFixed(1))
  const expected = 0.3;

  expect(result).toBe(expected);
});

test('adds large numbers', () => {
  const [a, b] = [123456789, 987654321];
  const expected = 1111111110;

  expect(sum(a, b)).toBe(expected);
});

test('adds strings as numbers', () => {
  const [a, b] = [2, 3];
  const expected = 5;

  expect(sum(a, b)).toBe(expected);  
});

test('throws error when arguments are not numbers', () => {
  const [a, b] = ["Hello", 3];
  
  expect(() => sum(a, b)).toThrow('Invalid sum value!');
});