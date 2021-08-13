/**
 * 
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 * @returns 
 */


var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (needle === haystack) return 0;
  if (needle.length > haystack.length) return -1;
  if (needle.length === haystack.length) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] !== needle[i]) {
        return -1;
      }
    }
    return 0;
  }
  let compare = "";

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let x = i;
      for (let k = 0; k < needle.length; k++) {
        if (haystack[x] !== needle[k]) {
          compare = "";
          break;
        } else {
          compare += haystack[x];
          x++;
        }
      }
      if (compare === needle) {
        return i;
      }
    }
  }
  return -1;
}