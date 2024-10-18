function isEqual(value, other) { // can be 2 objects
  if (value === other) return true;

  if (value == null || other == null || typeof value != "object" || typeof other != "object") {
    return false
  }

  // now other and value are both object
  const keysA = Object.keys(value)
  const keysB = Object.keys(other);

  if (keysA.length !== keysB.length) return false;

  for(const key of keysA) {
    if (!keysB.includes(key)) return false
    if (!isEqual(value[key], other[key])) {
      return false
    }
  }

  return true;
}

/**
 * 
 * if value and other has same reference or value => true    (primitives value, same null, same undefined)
 * if value != null and other is null => return false
 * if value != object and other is object => return false
 * if value = object and other is object => check:
 *     - if value keys !== other keys => return flase 
 *     - nested the checking using recursive
 * 
 */
