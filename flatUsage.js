// flat usage in javascript
// flat function takes an array of arrays and return an new array by combining all elements in the sub arrays.

const a1 = [0, 1, 2, [3, 4]];
const a2 = [0, 1, 2, [[3, 4]]];
const a3 = [0, 1, 2, [[[3, 4]]]];

console.log(a1.flat()); // [ 0,1,2,3,4 ]
console.log(a2.flat(2)); // [0, 1, 2, [3, 4]]
console.log(a3.flat(3)); // [ 0,1,2,3,4 ]
