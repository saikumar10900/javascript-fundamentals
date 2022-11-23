// block scope

let a = 10;
if (a > 5) {
  let z = 0;
  console.log(z); // 0
}
console.log(z); //  ReferenceError{"z is not defined"}



