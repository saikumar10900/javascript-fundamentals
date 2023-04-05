// function expression looks similar to a variable initialisation.
// function expression doesn't hoist like function declaration.
// JS engine treats them as variables and keeps undefined as the value.



const sayHello = function(){
    return "Hello";
};

console.log(sayHello());        // Hello
