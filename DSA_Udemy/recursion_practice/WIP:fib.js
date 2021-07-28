/**
 * fib accepts a number and returns the nth number in the fibonacci sequence
 * 1, 1, 2, 3, 5, 8
 * starts with one and where every number after is equal to the sum 
 * of the previous two numbers
 * fib(4) ---> 3
 * fib(10) ---> 55
 */

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);

}

export default fib;