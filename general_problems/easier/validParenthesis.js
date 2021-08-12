/**
 * given a string s containing (), {}, []
 * determine if string is valid
 * valid string---- 
 * 1. open brackets must be closed by the same type of brackets
 * 2. open brackets must be closed i nthe correct order
 * "()"===> true
 * "(){}[]" true
 * "(]" ===> false
 * 
 * // works well with a stack
 */

let isValid = function (str) {
  if (str.length === 0) return true;
  if (str.length === 1) return false;
  if (str.length % 2 !== 0) return false;
  let referenceObj = {
    "{": "}",
    "(": ")",
    "[": "]"
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (referenceObj[str[i]]) {
      stack.push(str[i]);
    } else if (str[i] !== referenceObj[stack.pop()]) {
      return false;
    }
  }
  return stack.length === 0;

}