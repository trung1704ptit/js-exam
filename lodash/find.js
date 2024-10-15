/*
implement find function that support
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The _.matches iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The _.matchesProperty iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'
 
// The _.property iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'

*/


function find(collection, predicate) { // collection is an array
  if (typeof predicate === "function") {
    for (let i = 0; i < collection.length; i++) {
      const check = predicate(collection[i])
      if (check) {
        return collection[i]
      }
    }
  }

  if (typeof predicate === "object" && !Array.isArray(predicate)){
    return collection.find(item => {
      return Object.keys(predicate).every(key => item[key] === predicate[key])
    })
  }

  if (Array.isArray(predicate)) {
    const [key, val] = predicate;
    return collection.find(item => item[key] === val)
  }

  if (typeof predicate === "string") {
    return collection.find(item => item[predicate])
  }

  return undefined;
}