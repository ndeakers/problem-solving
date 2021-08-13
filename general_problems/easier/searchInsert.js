/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

[1, 3, 5, 6] 5 ----> 2
 */


var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }
  if (target < nums[middle]) return middle;
  return middle + 1
};