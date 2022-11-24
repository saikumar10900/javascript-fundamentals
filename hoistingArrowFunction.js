// hoisting doesn't work for arrow function


myFunction();
let myFunction = () => {
  let x = 5;
  console.log(x); // ReferenceError{"Cannot access 'myFunction' before initialization"}
};



