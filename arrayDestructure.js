function destructureArray(a){
    let [x, ...z] = a;
    return x;
}
console.log(destructureArray([1, 2, 3])); // 1


