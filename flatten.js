/**
 * Implement flatten nested array
 */

// 2 ways

// first way: recursion
function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(flattenArray(val))
        } 
        return acc.concat(val)
    }, [])
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);  // Output: [1, 2, 3, 4, 5, 6]