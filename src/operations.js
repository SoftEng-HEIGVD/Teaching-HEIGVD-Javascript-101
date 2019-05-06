function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function compute(operation, x, y) {
  return operation(x, y);
}

module.exports = {
  add,
  multiply,
  compute,
};
