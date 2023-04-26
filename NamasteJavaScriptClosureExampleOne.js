// closure - function bundled with its lexical environment.
// here, the function inner will form a closure with it's parent outer and grand parent outest as the function is using the variables a and b.
// even though the function is returned from the outest function, the function inner will still remember the values of a and b as it forms closure.


function outest(){
    var a = 1;
    return function outer(){
        var b = 2;
        return function inner(){
            console.log(a, b);
        }
    }
}

var x = outest()    // outer will be returned
var y = x();        // inner will be returned
y();                // 1 2
