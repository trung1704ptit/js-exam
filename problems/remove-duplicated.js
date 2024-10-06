function filterDuplicates(arr, key) { // key is name of property
  const seen = new Set()

  return arr.filter(obj => {
    if (seen.has(obj[key])) {
      return false // found duplicated, filter it out
    } else {
      seen.add(obj[key])
      return true
    }
  })
}

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'David' }, // Duplicate based on 'id'
  { id: 4, name: 'Eve' },
  { id: 1, name: 'Frank' }   // Duplicate based on 'id'
];

const uniqueData = filterDuplicates(data, 'id');
console.log(uniqueData);