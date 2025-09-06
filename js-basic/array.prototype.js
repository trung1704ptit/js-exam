/**
 * Extend the Array.prototype by adding custom method
 * 
 */

// Ex1

Array.prototype.sum = function() {
    return this.reduce((acc, current) => acc + current, 0)
}

// Test Ex1
const numbers = [1,2,3,4,5]
console.log(numbers.sum()) // output 15


// Ex2
Array.prototype.last = function() {
    return this[this.length - 1]
}

const items = ["apple", "banana", "orange"]
console.log(items.last()) // orange