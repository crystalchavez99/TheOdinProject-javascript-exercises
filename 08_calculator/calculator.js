const add = function(num1,num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
  let result = num1 - num2;
  return result
};

const sum = function(arr) {
  let result = 0;
  /*creates a new array populated with the results of calling a provided function
  on every element in the calling array.*/
  arr.map(number => {
    result += number;
  })
  return result
};

const multiply = function(arr) {
  let result = 1;
  arr.map(number => {
    result *= number;
  })
  return result
};

const power = function(base,exponent) {
  let result = 1;
  for(let i = 1; i <= exponent; i++){
    result *= base;
  }
  return result;
};

const factorial = function(n) {
  let fact = 1;
  for(let i = 1; i <= n; i++){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
