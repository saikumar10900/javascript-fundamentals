// currying using closure

let multiply = function(a, b){
    return function(b){
        console.log(a * b); // here, this function forms a closure with a
    };
};

let multiplyByTwo = multiply(2);    // will be set a
multiplyByTwo(3); // this will be set to b      // 6

