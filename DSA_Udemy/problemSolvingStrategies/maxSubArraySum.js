/**
 * Sliding Window Practice
 *  maxSubArray finds the maximum subarray with length of the number
 * passed to the function
 * maxSubarraySum([100, 200, 300, 400], 2) ===> 700
 * */

// determine the sum from 0 to input num
// loop over the array starting at num
// the subarraysum is the maxSum - the arr[i - num] + arr[i]

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let tmp = 0;
  for (let i = 0; i < num; i++) {
    tmp += arr[i];
  }
  let maxSum = tmp;
  for (let j = num; j < arr.length; j++) {
    tmp = tmp - arr[j - num] + arr[j];
    maxSum = Math.max(tmp, maxSum);
  }
  return maxSum;
}