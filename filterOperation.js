// filter creates a new array by executing the given function to each value in the array.
// it returs the element if it passes the check in the function
// filter function doesn't change the original array


function getPositiveValues(a){
    return a > -1;
}

let a = [-1, -2, -3, 0, 1, 2, 3, 4, 5];
let b = a.filter(getPositiveValues);
console.log(b); // [0, 1, 2, 3, 4, 5]
console.log(a); // [-1, -2, -3, 0, 1, 2, 3, 4, 5]

