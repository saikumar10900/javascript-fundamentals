// hoisting doesn't work for function expression

myFunction();
let myFunction = function () {
  let x = 5;
  console.log(x); // ReferenceError{"Cannot access 'myFunction' before initialization"}
};



