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
