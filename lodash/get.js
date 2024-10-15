/*
implement again get method

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
*/

/// path = "a[0].b.c" => idea: split it in to list: [a, 0, b, c]  objec["a"] => got it, if number obj["a"][0]

function get(obj, path, defaultVal) {
  // if path is string, we need to handle both dot and bracket notation
  if (typeof path === "string") {
    path = path.replace(/\[(\d+)]/g, ".$1").split(".");
  }
  let result = obj;

  for (let i = 0; i < path.length; i++) {
    const key = path[i];

    const keyAsNumber = isNaN(key) ? key : Number(key);

    result = result ? result[keyAsNumber] : undefined;

    if (result === undefined) {
      return defaultVal;
    }
  }
  return result;
}
