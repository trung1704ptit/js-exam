/**
 * Write a JavaScript program to find the largest element in a nested array.
 */

function findLargestElement(arr) {
  let largest = -Infinity; // Start with the smallest possible number
  
  function recursiveSearch(array) {
    for (let element of array) {
      if (Array.isArray(element)) {
        // If element is an array, call recursiveSearch on it
        recursiveSearch(element);
      } else if (typeof element === 'number' && element > largest) {
        // If it's a number and larger than current largest, update largest
        largest = element;
      }
    }
  }

  recursiveSearch(arr);
  return largest;
}
/*
  arr = [1, 2, 3, [4, 5, 6], [7, [8, 9]]]

  loop through arr
  if element is number => check with largest number, if element > largest => largest = element
  if element is array => recursive checking
*/