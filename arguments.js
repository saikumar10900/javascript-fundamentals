// arguments is the default array that collects the params received from the function call

function sayHello(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

sayHello(1, 2, 3);
// output

// 1
// 2
// 3
