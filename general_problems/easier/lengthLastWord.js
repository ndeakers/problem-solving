
/**
 * Given a string s consisting of some words separated by some number of spaces, 
 * return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
 */


var lengthOfLastWord = function (s) {
  if (s.length === 0) return 0;
  let trimmed = s.trim();
  let counter = 0;
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] === " ") {
      break;
    } else {
      counter++;
    }
  }
  return counter;

};

