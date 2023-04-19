// spread operator always be used as the last argument to receive the remaining values
// here, 1 will be assigned to x and the remaining [2, 3] array will be in z


function destructureArray(a){
    let [x, ...z] = a;
    return x;
}
console.log(destructureArray([1, 2, 3])); // 1


