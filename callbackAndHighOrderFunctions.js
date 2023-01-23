
// this is the callback function
function x(){
    console.log("callback function");
}

// this is the high-order function where it takes a callback function and executes later
function y(param){
    param();
}

y(x);   // callback function



