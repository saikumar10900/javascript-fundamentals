// flat usage in javascript

const a1 = [0, 1, 2, [3, 4]];
const a2 = [0, 1, 2, [[3, 4]]];
const a3 = [0, 1, 2, [[[3, 4]]]];

console.log(a1.flat()); // [ 0,1,2,3,4 ]
console.log(a2.flat(2)); // [0, 1, 2, [3, 4]]
console.log(a3.flat(3)); // [ 0,1,2,3,4 ]
