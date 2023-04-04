// all function declarations will be hoisted when the code is run
// we can access the function before declaration.


console.log(sayHello());    // Hello

function sayHello(){
    return "Hello";
}

console.log(sayHello());     // Hello
