/**
 * given a string s containing (), {}, []
 * determine if string is valid
 * valid string---- 
 * 1. open brackets must be closed by the same type of brackets
 * 2. open brackets must be closed i nthe correct order
 * "()"===> true
 * "(){}[]" true
 * "(]" ===> false
 */

let isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  let paren = "()";
  let curly = "{}";
  let bracket = "[]";
  let openBracket = 0;
  let closedBracket = 0
  let openCurly = 0;
  let closedCurly = 0
  let openParen = 0;
  let closedParen = 0;

  for (let i = 0; i < s.length; i++) {

    if (s[i] === paren[0]) {
      openParen++;
    }
    if (s[i] === paren[1]) {

      if (openParen === 0 || (openParen + closedParen) % 2 == 0) {
        return false
      }
      closedParen++;
    }
    if (s[i] === curly[0]) {
      openCurly++;

    }
    if (s[i] === curly[1]) {

      if (openCurly === 0 || (openCurly + closedCurly) % 2 === 0) {
        return false
      }
      closedCurly++;
    }
    if (s[i] === bracket[0]) {
      openBracket++;
    }
    if (s[i] === bracket[1]) {
      if (openBracket === 0 || (openBracket + closedCurly) % 2 === 0) {
        return false
      }
      closedBracket++;
    }

    if (s[i] === paren[0] && (s[i + 1] === curly[1] || s[i + 1] === bracket[1])) return false
    if (s[i] === curly[0] && (s[i + 1] === bracket[1] || s[i + 1] === paren[1])) return false
    if (s[i] === bracket[0] && (s[i + 1] === curly[1] || s[i + 1] === paren[1])) return false

  }
  if (openCurly !== closedCurly || openBracket !== closedBracket || openParen !== closedParen) return false
  return true;

}