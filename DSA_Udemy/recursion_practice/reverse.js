/**
 * reverse accepts a string and returns a new string reversed.
 * 
 * solve recursively
 * ("awesome") ---> "emosewa"
 */

function reverse(str, result = "") {
  let end = str[str.length - 1];
  if (end === undefined) return result;
  result += end;
  str = str.slice(0, str.length - 1);
  return reverse(str, result);
}