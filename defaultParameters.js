// we can use default parameters if the function call doesn't carry any arguments.
// we can define default parameters like below.
// if the function call send arguments, the default params will get replaced by the args send.


function greet(greeting = "Hello"){
    console.log(greeting + " Saikumar");
}

greet();        // Hello Saikumar
greet("Hi");    // Hi Saikumar
