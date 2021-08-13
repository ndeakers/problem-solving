/**
 * Given a str representing a valid roman numeral, convert that to an integer
 * "III" ---> 3
 * "IV" ---> 4
 * "LVIII" ---> 58
 */


var romanToInt = function (str) {
  let reference = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let weirdOnes = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
  let sum = 0;
  let doubleCheck;
  for (let i = 0; i < str.length; i++) {
    doubleCheck = str[i] + str[i + 1];
    if (weirdOnes[doubleCheck]) {
      sum += weirdOnes[doubleCheck];
      i++;
    } else {
      sum += reference[str[i]];
    }
  }
  return sum;
};