/**
 * given a string (s) of lowercase letters that repeat infinitely, given an int (n),
 * find the number of a's in the first n letters of the infinite string
 * 
 * repeatedString("aba", 10) ====> 7. 7 a's 
 * repeatedString("abcac", 10) ===> 4 a's
 */


function repeatedString(s, n) {
  let numAsInString = 0;
  let lengthOfString = s.length;
  let remainder = n % lengthOfString;
  console.log("remainder", remainder);
  for (let char of s) {
    if (char === "a") numAsInString++;
  }
  let totalAs = Math.floor(n / lengthOfString) * numAsInString;

  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      totalAs++;
    }
  }
  return totalAs;

}