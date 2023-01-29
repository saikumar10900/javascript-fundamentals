// Amazon interview question

let sum = function(a){
    return function(b){
        if(b){
            return sum(a + b);
        }
        return a;
    };
};

let sum2 = a => b => b ? sum2(a + b) : a;

console.log(sum(1)(2)(3)(4)());     // 10
console.log(sum2(1)(2)(3)(4)(5)());     // 15


