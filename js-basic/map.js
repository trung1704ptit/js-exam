// Map object hold key-value pairs and remembers the original insertion order of the keys.



const map = new Map();

map.set("a", 1)
map.set("b", 2);
map.set("c", 3)

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

// get map size:
console.log(map.size)
// output: 3

map.delete(b);

// map.size now is


