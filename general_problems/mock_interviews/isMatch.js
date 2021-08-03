/* 

Implement a regular expression function isMatch that supports the '.' and '*' symbols. 

The function receives two strings - text and pattern - and should return true if the text matches the pattern as a regular expression. 

For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

In case you aren’t familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.' is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter (see fourth and fifth examples). 

Explain your algorithm, and analyze its time and space complexities.

Examples: 

input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "a", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true
 */

// . is a wildcard char
// * 0 or more sequences of the previous letter

// loop through the pattern
// check that the current text is matching the pattern
// return false if its not
// update the index of the text

function isMatch(text, pattern) {
  if (text === pattern) return true;
  let pointer = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === ".") {
      pointer++;
    } else if (pattern[i] === "*") {
      let previous = pattern[i - 1];
      for (let j = pointer; j < text.length; j++) {
        if (text[j] !== previous) {
          break;
        } if (text[j] === previous) {
          pointer++;
        }
      }


    } else if (pattern[i] !== text[pointer] && pattern[i + 1] !== "*") {
      return false;
    } else if (pattern[i] === text[pointer]) {
      pointer++;
    }
  }
  console.log("pointer", pointer);
  if (pointer <= text.length - 1) {
    return false;
  }
  return true;
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'aa'))
console.log(isMatch('abc', 'a.c'))
console.log(isMatch('a', 'ab*'))
console.log(isMatch('acd', 'ab*c.'))
console.log(isMatch('acd', 'afob*c.'))