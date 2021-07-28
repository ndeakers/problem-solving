/*
Write a function called factorial which accepts a number and returns the 
factorial of that number.
factorial is the porduct of an integer and all numbers below it
4! ===> 4 * 3 * 2 * 1---> 24
0! ====> 1 
*/

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}