/**
 * reverse accepts a string and returns a new string reversed.
 * 
 * solve recursively
 * ("awesome") ---> "emosewa"
 */

function reverse(str, result = "") {
  if (str[str.length - 1] === undefined) return result;
  result.push(str[str.length - 1]);
  str.pop();
  return reverse(str.slice(str.length), result);
}