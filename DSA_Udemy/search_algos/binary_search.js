/**
 * write binary search
 * given a sorted array and a val, returns the index at 
 * which the value exists. otherwise returns -1
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left < right) {
    middle = Math.floor((right + left) / 2);
    console.log(middle);
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}