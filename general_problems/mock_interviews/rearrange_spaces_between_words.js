/**
 You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.
 */
var reorderSpaces = function (text) {
  // find the maximum spaces between the words
  let totalSpaces = 0;
  let words = [];
  let currWord = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") totalSpaces++;
    if (text[i] !== " ") {
      currWord += text[i];
    }
    if (text[i] !== " " && (text[i + 1] === " " || text[i + 1] === undefined)) {
      words.push(currWord);
      currWord = "";
    }
  }
  if (words.length == 1) {
    return words[0] += " ".repeat(totalSpaces);
  }
  console.log("words", words, "spaces", totalSpaces);
  let remainder = (totalSpaces % (words.length - 1));
  let spacesToAdd = Math.floor(totalSpaces / (words.length - 1));
  let result = words.join(" ".repeat(spacesToAdd));
  result += " ".repeat(remainder);
  return result;

};