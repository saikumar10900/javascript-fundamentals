function multiply (a) {
  return function(b){
    return a * b;
  };
}

const result = multiply(2)(3);
console.log(result);    // 6


