/**
 * similar to bubble sort but instead of first placing large values into position,
 * you place small values into sorted position.
 * find minimum swap with the beginning.
 * Pseudocode: store the first element as the smallest value you've seen
 * compare this item to the next item in the array until you find a smaller one. save the index
 * if smaller number found. make that one smallest.
 * if minimum is not the index you started with, swap
 * repeat this with the next element until the array is sorted.
 * 
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) { // compare to the right of i
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
}