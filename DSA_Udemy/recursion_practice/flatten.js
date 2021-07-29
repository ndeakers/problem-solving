/**
 * accepts an array of arrays and returns a new array with all values flatten
 * flatten([1, 2, 3, [4, 5] ]) ===> [1, 2, 3, 4, 5];
 */

function flatten(arr, res=[]) {
  for (let el of arr) {
    if (Array.isArray(el) === true) {
      flatten(el, res);
    } else {
      res.push(el);
    }
  }
  return res;
}