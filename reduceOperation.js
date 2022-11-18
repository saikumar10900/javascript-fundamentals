// reduce functiont takes an array of elements and performs the function logic
// it returns a single element as the output
// it doesn't change the original array

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // 21


