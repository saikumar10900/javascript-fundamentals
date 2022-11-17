// Spread Operation in JavaScript
// this operator is used to unpack a list of elements
// speard operator represented by "...variable_name"

let a1 = [1, 2, 3];
console.log(...a1); // 1 2 3

let o1 = {name: 'Saikumar', age: 22};
console.log({...o1}); // { name:Saikumar,age:22 }

// advantages of spread operator
//  - can create a new copy of array/object
//  - can concatenate two arrays/ojects
//  - can be used in functions

// creating new copy of an array
let newCopyOfArray = [...a1];
console.log(newCopyOfArray);        // [1, 2, 3]
console.log(...newCopyOfArray);    // 1 2 3

// creating new copy of an object
let newCopyOfObject = {...o1};
console.log(newCopyOfObject)        // { name:Saikumar,age:22 }

// spread operator usage in functions
function add(x, y) {
  return x * y;
}
let numbers = [1, 2];

console.log(add(...numbers)); // 2





