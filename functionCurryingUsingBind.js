// Currying using bind function

const multiply = function(a, b){
    console.log(a * b);     // 6
};

const multiplyByTwo = multiply.bind(this, 2);   // here we are Currying our multiply function
                                                // first arg will be set to a
multiplyByTwo(3);   // this arg will be set to b

