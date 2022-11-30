let a = 10;
let b = 20;
console.log(a, b); // 10 20

const temp = b;
b = a;
a = temp;
console.log(a, b); // 20 10

let c = 100;
let d = 200;

[d, c] = [c, d];
console.log(c, d); // 200 100
