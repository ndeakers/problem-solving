/**
 * Write a function called sameFrequency
 * given two positive integers. Find out if the two have the 
 * same frequency of digits
 * 
 * Time O(n)
 * 182, 281 ====> true
 * 34, 14 ===>false
 *  */

// change both numbers to a string
// if different lengths return false
// loop over each number and create freqCounter

// loop over one freq counter and compare to the other
// return false if different
// return true

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let char of strNum1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of strNum2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}