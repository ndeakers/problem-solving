// given an array of sorted integers and a target average
// determine if there is a pair of values in the array 
// where average of the pairs equal target value

//Time O(n);
// Space 0(1);

// [1, 2, 3,] 1.5 ===> true
// [1, 4 , 5, 6] 13 ===> false
// have two pointers one at zero and one at end
// if average is too big move right down
// if average is too small move left up
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;

        if (avg > target) {
            right--;
        } else if (avg < target) {
            left++;
        } else {
            return true;
        }
    }
    return false;
}