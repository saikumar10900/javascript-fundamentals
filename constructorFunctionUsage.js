function constructorFunction(a, b){
    this.a = a;
    this.b = b;
    this.sum = function sum(a, b){
        return `sum: ${a+b}`;
    };
}

let f1 = new constructorFunction(10, 20);
let sum = f1.sum(1, 2);
console.log(sum);


