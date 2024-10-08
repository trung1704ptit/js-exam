/**
 * Promise in javascript is an object that handle asynchrous actions, it can return the success value or failed reason for the operator.
 * 
 * State:
 * - Pending: inital state
 * - Fullfilled: Operation completed successfully
 * - Rejected: Operation failed
 * 
 * Trasition:
 * - from pending to fullfiled with a value
 * - from pending to rejected with a reason (error)
 * 
 * 
 * Method:
 * - then(onFullfilled, onRejected)
 * - catch(onRejected)
 * - finnaly(onFinally)
 * 
 * 
 */

// example:
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successfull")
  } else {
    reject("Operation failed")
  }
})

// usage:
promise.then((value) => {
  console.log("value:", value)
}).catch(error => {
  console.log(error)
}).finally(() => {
  console.log("Operation completed")
})


// chaining promise:
fetch("http://api.com/example")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return fetch("https://other-api/other-data")
  })
  .then(res => res.json())
  .then(otherData => {
    console.log(otherData)
  }).catch(error => console.log(error))


// Promise static methods:
// Promise.all: wait all promises in the iterable to be fullfilled and returns a single promise that resovles with an array of the results.
let promise1 = Promise.resolve(3)
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Foo")
})

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values) // [3, 42, "Foo"]
})

// Promise Race: return a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason for that promise.
let promise12 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one")
})

let promise22 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value) // two
})


// Promise allsettlled



// Error handling:
let p = new Promise((resolve, reject) => {
  throw new Error("Something went wrong")
}).catch(error => {
  console.error("Catch error:", error.message)
})


// promise chain

func()
  .then((x) => {
    return anotherFunc(x)
  })
  .then((y) => {
    return moreOtherFunc(y)
  })
  .then(i => {
    return i
  })