/**
 * implement bubble sort! 
 * PseudoCode:
 * starting looping with i from the end of the array towards the beginning
 * inner loop: j loop from beginning until i - 1
 * if arr[j] > arr[j + 1]==== swap
 * 
 * return sorted array!
 * optimization to bubble sort: add a swaps variable. If there are no swaps all the way
 * through one time. There won't be swaps again. break out and avoid extra work.
 * if nearly sorted: this is about O(n)---> generally quadratic
 */

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= (i - 1); j++) { // need <= or last one won't be sorted
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}