/*
Yield Values: A generator can return multiple values over time, one at a time, by using the yield keyword.
Pausing and Resuming: Generators can be paused when they yield a value and resumed later from where they left off.
Generator Function Syntax: A generator function is defined using the function* (note the asterisk) syntax.
next() Method: To control a generator, you use the next() method,
which returns an object containing value and done.
The done property tells you whether the generator has more values to yield.
*/

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = simpleGenerator()

console.log(generator.next()) // { value: 1, done: false }
console.log(generator.next())// { value: 2, done: false }
console.log(generator.next()) // { value: 3, done: false }
console.log(generator.next()) // { value: undefined, done: true }

