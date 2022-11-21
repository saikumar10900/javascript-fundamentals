function factoryFunction(a, b){
    return{
        a,
        b,
        sum(a, b){
            return `sum: ${a + b}`;
        }
    };
}

let f1 = factoryFunction(10, 20);
let sum = f1.sum(1, 2);
console.log(sum);



