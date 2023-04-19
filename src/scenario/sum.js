function sum(a, b) {
  if(isNaN(a)) {
    throw new Error('Invalid sum value!');
  }
  return a + b;
}
module.exports = sum;