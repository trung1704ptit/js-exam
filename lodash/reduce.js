/* Implement again the reduce function simimlar lodash */

// for Array
function reduce(array, iteratee, accumlator) {
  let index = 0;

  if (accumlator === undefined) {
    accumlator = array[0];
    index = 1;
  }

  for (; index < array.length; index++) {
    accumlator = iteratee(accumlator, array[i], index, array);
  }

  return accumlator;
}

// Example usage:
const sum = reduce([1, 2, 3, 4], (acc, val) => acc + val, 0);
console.log(sum); // Output: 10

// ----------------------------------------------------------------------------------

// for Objects
function reduceForObject(collection, iteratee, accumulator) {
  let keys = Object.keys(collection);
  let index = 0;

  if (accumulator === undefined) {
    accumulator = collection[keys[0]];
    index = 1;
  }

  for (; index < keys.length; index++) {
    let key = keys[index];
    accumulator = iteratee(accumulator, collection[key], key, collection);
  }

  return accumulator;
}

// Example usage with an object:
const result = reduce({ a: 1, b: 2, c: 3 }, (acc, val) => acc + val, 0);
console.log(result); // Output: 6
