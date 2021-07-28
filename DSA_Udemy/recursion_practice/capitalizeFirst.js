/**
 * Write a recursive function that given an array of strings, capitalizes the first letter
 * of each string
 * (["car", "taco"]) ===> ["Car", "Taco"];
 */
// mix of iteration and recursion
function capitalizeFirst(strings, res) {
  let first = strings[0];
  let upper = first[0].toUpperCase().concat(first.slice(1));
  res.push(upper);
  capitalizeFirst(strings.slice(1));

}