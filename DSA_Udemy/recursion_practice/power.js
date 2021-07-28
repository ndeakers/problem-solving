"use strict";

/*
Write a function called power that accepts a base and an exponent
returns power of the base to the exponent
Should work like Math.pow()
inputs will be positive
solve recursively:

power(2, 0) ===> 1
power(2, 2) ===> 4
power(2, 4) ===> 16
2 * 2 * 2 * 2
*/
// 
function power(base, exp) {
  if (base === 0) return 0;
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}