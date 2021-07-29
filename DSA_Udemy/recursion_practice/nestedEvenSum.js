/**
 * nestedEvenSum returns the sum ofall even numbers in an object which may contain
 * nested objects
 * var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
  nestedEvenSum(obj1) ===> 6
 */
  // loop throught the obj
   // if value is a number and even add to the res
  // if it is an object, call nestedEvenSum
function nestedEvenSum(obj, res=0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      nestedEvenSum(obj[key], res);
    }
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      res += obj[key];
    } 

  }
  return res;
}