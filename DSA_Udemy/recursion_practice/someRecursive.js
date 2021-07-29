/**
 * someRecursive accepts an array and a callback
 * returns true if a single value in the array returns true when passed to the callback
 * otherwise return false
 * [1, 2, 3, 4], isOddFn ====> true
 * [2, 2, 4, 4], isOddFn ====> false
 */
  // base case is when array is empty ---> false
  // easiest to pop from the array
  // if that passes the fn return true
const isOdd = (el) => el % 2 !== 0;

function someRecursive(arr, fn) {
  if (arr.length === 0) return false;
  let lastEl = arr.pop();
  if(fn(lastEl) === true) return true;
  return someRecursive(arr, fn);
}