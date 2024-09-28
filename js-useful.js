
// implement the deepclone method in js

const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }
  return copy;
}


// implement Flatten a nested array
// ex: [1, [2, [3, [4, 5]]]]
// ex: [1,2, 3, [4, 5]]

// solution 1: if you knowthat is integers
const flatten1 =(arr) => {
  return JSON.stringify([1, [2, [3, [4, 5]]]]).split("").filter(s => s !== "[" && s !== ']' && s !== ' ' && s !== ',').map(item => parseInt(item))
}

// solution 2:
const flatten2 =(arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten2(toFlatten) : toFlatten)
  }, [])
}



// 3 Implement Debounce function
const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
