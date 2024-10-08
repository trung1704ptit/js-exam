function groupBy(array, key) {
  return array.reduce((accumulator, item) => {
    // Determine the group key
    const groupKey = typeof key === 'function' ? key(item) : item[key];

    // If the group doesn't exist, create it
    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }

    // Add the current item to the group
    accumulator[groupKey].push(item);
    
    return accumulator;
  }, {});
}