// block scope
// let and const declarations are block scoped, So we can't use them outside the block in which they are defined.
// Using let and const wherever possible, it makes not to fall in unnecessary errors.

let a = 10;
if (a > 5) {
  let z = 0;
  console.log(z); // 0
}
console.log(z); //  ReferenceError{"z is not defined"}



