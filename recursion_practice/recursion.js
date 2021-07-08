/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */
// if (words.length === 0) return 0
// find out length of current word, then call function again for a slightly smaller list
// whichever is bigger is the longest word

// does the work on the way down
function longest(words) {
  if (words.length === 0) return 0;
  let length = words[0].length;
  debugger;
  let lengthFoundForRestOFList = longest(words.slice(1))
  if (length > lengthFoundForRestOFList) {
    return length;
  } else {
    return lengthFoundForRestOFList;
  }

}


/** everyOther: return a string with every other letter. */
// could skip over odd numbers
function everyOther(str, i = 0) {
  if (i === str.length) return "";
  if (i % 2 === 0) {
    return str[i] + everyOther(str, i + 1);
  } else {
    return everyOther(str, i + 1);
  }

}

/** isPalindrome: checks whether a string is a palindrome or not. */
// empty word is a palindrome, single letter is a palindrome
// for every other do first and last letter match. if not return false
// if do call for slightly smaller word
function isPalindrome(str, out = "", i = str.length - 1) {




  if (i < 0) {
    if (out === str) {
      return true;
    }
    return false;
  }
  out += str[i];
  return isPalindrome(str, out, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1
  if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }

}

/** revString: return a copy of a string, but in reverse. */
// check here for a different method
function revString(str, i = 0, rev = "") {
  // this works
  // if (i < 0) return "";
  // return str[i] + revString(str, i - 1);

  // this works too
  if (rev.length === str.length) return rev;
  rev += str[str.length - 1 - i]
  return revString(str, i + 1, rev)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      out.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      gatherStrings(obj[key], out);
    }
  }
  console.log("out", out)
  return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
// little like longest word
function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;
  let point = Math.floor((right + left) / 2);

  console.log("point", point)
  if (arr[point] === val) return point;

  if (arr[point] < val) {
    left = point + 1;
    return binarySearch(arr, val, left, right);
  }
  if (arr[point] > val) {
    right = point - 1;
    return binarySearch(arr, val, left, right);
  }

  if (left === right && arr[point] !== val) return -1;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
