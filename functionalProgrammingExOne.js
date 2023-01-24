let arr = [1, 2, 3, 4]

const area = function(radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2 * radius;
};

const genericFunction = function(arr, logic){
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
};

console.log(genericFunction(arr, diameter));


