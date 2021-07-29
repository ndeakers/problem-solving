/**
 * given an array of words, return a new array containing each word capitalized
 * 
 */

function capitalizeWords(words, out = []) {
  if (words.length === 0) return out;
  let word = words[0];
  let res = "";
  for (let char of word) {
    char = char.toUpperCase();
    res += char;
  }
  out.push(res);
  return capitalizeFirst(words.slice(1), out);
}