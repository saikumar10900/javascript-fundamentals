// hoisting doesn't work for arrow function
// when javascript runs, it treats the arrow function as a variable and allocates the undefined to it in the memory component.


myFunction();
let myFunction = () => {
  let x = 5;
  console.log(x); // ReferenceError{"Cannot access 'myFunction' before initialization"}
};



