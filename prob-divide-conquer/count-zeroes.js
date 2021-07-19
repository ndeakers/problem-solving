/*
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, 
 * write a function called countZeroes, which returns the number of zeroes in the array.
 * 
 * 
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
 */

// create a left variable
// create a right variable
// create point where 0s begin variable

// loop while left is less than the right
// check the current middle if it is a 0 and has a 1 to the left
// or if its a 1 and has a 0 to the right
// set point where 0s begin variable

// if to right of current point is undefined break out of loop and return 0
function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let pointWhereZeroBegin;

  while (left <= right) {
    let middleIdx = Math.floor((right + left) / 2);
    let middleVal = arr[middleIdx];

    // if the middle index is a 0
    if (middleVal === 0) {
      if (arr[middleIdx - 1] === 1) {
        pointWhereZeroBegin = middleIdx;
        break;
      } else if (arr[middleIdx - 1] === 0) {
        right = middleIdx - 1;
      } else if (arr[middleIdx - 1] === undefined) {
        pointWhereZeroBegin = 0;
        break;
      }
    } else if (middleVal === 1) {
      if (arr[middleIdx + 1] === 0) {
        pointWhereZeroBegin = middleIdx + 1;
        break;
      } else if (arr[middleIdx + 1] === 1) {
        left = middleIdx + 1;
      } else if (arr[middleIdx + 1] === undefined) {
        pointWhereZeroBegin = arr.length;
        break;
      }
    }
  }
  return arr.length - pointWhereZeroBegin;
}


module.exports = countZeroes