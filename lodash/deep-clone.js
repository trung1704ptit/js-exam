/**
 * Here’s an implementation of deep cloning in JavaScript, which creates a new copy of an object,
 * including all nested objects or arrays, ensuring that modifying the clone does not affect the original object.
 */

// A WeakMap is used here because it allows garbage collection of its keys when they are no longer referenced, avoiding memory leaks.

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj; // obj is value, then return it
  }

  if (hash.has(obj)) {
    // checking Circular References
    return hash.get(obj);
  }

  const clonedObj = Array.isArray(obj) ? [] : {};

  // Store the clone in the Weakmap
  hash.set(obj, clonedObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key], hash);
    }
  }

  return clonedObj;
}

// ------------------ other way ----------------------------
function deepClone2(obj) {
  return JSON.parse(JSON.stringify(obj));
}
