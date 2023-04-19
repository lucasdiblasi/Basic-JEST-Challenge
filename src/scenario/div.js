function div(a, b) {
  if (b === 0) {
    throw new Error('Divisor cannot be zero!');
  } 
  if(isNaN(b)) {
    throw new Error('Invalid divisor value!');
  }
  return a / b;
}

module.exports = {
  div
};