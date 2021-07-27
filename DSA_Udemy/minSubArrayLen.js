/**Sliding Window.
* minSubArrayLen accepts an array of positive integers and a positive integer
* returns minimal length of a contiguous subarray of which the sum is 
* greater than or equal to the integer passed to the function. If not return 0
* [2, 3, 1, 2, 4, 3], 7 ===> 2 [4, 3]
*/
// create a right pointer
// create a left pointer
// create a minLength var
// 

function minSubArrayLen(nums, target) {
    let right;
    let left = 0;
    let minLength = Infinity;
    let sum = 0;

    for (right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right + 1 - left);
            sum -= nums[left];
            left++;
        }
    }
    if (minLength === Infinity) return 0;
    return minLength;
}