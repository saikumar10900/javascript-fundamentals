// Currying using bind function
// Here, at line 11, we are binding the multiply method with the context and 1 arg. So, will get multiply function copy with 2 as the value to a
// line 13, we are calling the callback function returned in the line 11 with arg 3, it will be set to b and our output will be 6



const multiply = function(a, b){
    console.log(a * b);     // 6
};

const multiplyByTwo = multiply.bind(this, 2);   // here we are Currying our multiply function
                                                // first arg will be set to a
multiplyByTwo(3);   // this arg will be set to b

