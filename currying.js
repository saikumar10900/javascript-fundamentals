// currying transforms the function into nested functions to achieve different output with the same function.
// here multiply function is returning an another function by forming a closure with its parent function.
// 2 will be a, 3 will be b here

function multiply (a) {
  return function(b){
    return a * b;
  };
}

const result = multiply(2)(3);
console.log(result);    // 6


