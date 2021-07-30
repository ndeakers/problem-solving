/**
 * wordCountEngine
 * takes in a string and returns
 * returns an array of arrays with the word then the count [[cat, 1], [dog, 2]]
 * This should strip out puncuations don't --> dont
 * ordered highest to lowest in terms of count, if theres a tie whichever shows up first will be 
 * first in the output array
 * case insensitive Put === put
 */
// create a set of letters 
// create a freq counter
// maybe split on the spaces to an array
// lowercase the string
// split to an array
// loop through the string to check if there are any non letters
// if there are non abc char
// splice them out ?
// add to my frequency counter

// loop through the freqCounter
// build out the array of arrays
// sort the array of arrays from highest to lowest

// worry about ties. use indexOf the two ties and swap if needed
function wordCountEngine(str) {

  let abc = new Set(['a', 'b' '...']);
  let freqCounter = {};
  let strArray = str.split(" ");

  for (let word of strArray) {
    let lowerWord = word.toLowerCase();
    let buildString = "";
    for (let char of lowerWord) {
      if (abc.has(char)) {
        buildString += char;
      }
    }
    if (!freqCounter[buildString]) {
      freqCounter[buildString] = 1;
    } else {
      freqCounter[buildString]++;
    }
  }

  let container = []; // [[cat: 1], [dog: 3]];
  for (key in freqCounter) {
    container.push(key, freqCounter[key]);
  }
  container.sort(compare);
  function compare(a, b) {
    return b[1] - a[1];
  }
  // check for duplicates and order how they are in the string.


}