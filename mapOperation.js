// map creates a new array by executing the given function to each value in the array
// map function doesn't change the original array

function doubleTheValue(a){
    return a + a;
}

let a = [1, 2, 3, 4, 5];
let b = a.map(doubleTheValue);
console.log(b); // [2, 4, 6, 8, 10]
console.log(a); // [1, 2, 3, 4, 5]

