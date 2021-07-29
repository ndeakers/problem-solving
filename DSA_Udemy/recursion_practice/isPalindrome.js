/**
 * isPalindrome returns true if the string passed to it is a palindrome
 * reads the same forwards and backwards.
 * otherwise returns false
 * ("awesome") ---> false
 * (racecar) ---> true
 */


function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length === 1) return true;
  str = str.slice(1, str.length - 1);
  return isPalindrome(str);
}