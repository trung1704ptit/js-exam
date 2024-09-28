function add(a, b) {
  return a + b
}

const numbers = [1, 2];

console.log(add.apply(null, numbers)) // output 3

/**
 * 
 * Apply is quite similar with Call, but apply take an array as the argument instead of individual arguments
 * in this example we passing null as this value and numbers as an array of arguments.
 */
