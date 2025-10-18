// viết 1 hàm curry(fn) sao cho có thể curry bất kỳ ham nao

function curry(fn) {
    return function curried(...args) {
        if (args.length > fn.length) {
            return fn.apply(this, args)
        } else {
            return (...next) => curried.apply(...args, ...next)
        }
    }
}

// example
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1, 2)(3))


// viet 1 ham curry tinh tong cho bat ky tham so
function add(...args1) {
    const sum = args1.reduce((a, b) => a + b, 0)
    return function next(...args2) {
        if (args2.length === 0) return sum;
        return add(sum, ...args2)
    }
}

console.log(add(1)(2)(3)(4)()) // 10
console.log(add(1, 2)(3,4)()) // 10