// Rest Operation in JavaScript
// this operator is used to pack elements into a list
// rest operator represented by "...variable_name"

let [...a1] = [1, 2, 3];
console.log(a1); // [1, 2, 3]

let {name, ...ageAndJob} = {name: 'Saikumar', age: 22, job: "SDE"};
console.log(name); // Saikumar
console.log(ageAndJob) // {age: 22, job: "SDE"}

// Note: while using rest operator in function calls,
// it should be the last param of the function

function add(a, b, ...c){
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // [3, 4, 5]
}

function add(a, ...c, b){
    console.log(a); // error
    console.log(b); // error
    console.log(c); // error
}

add(1, 2, 3, 4, 5)



