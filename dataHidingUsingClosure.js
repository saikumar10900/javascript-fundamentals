function counter(){
    var count = 0;
    return function incrementCount(){
        count++;
        console.log(count);
    }
}

var c1 = counter(); // incrementCount function will be returned and stored in c1
c1();               // 1

// here, we can't access the count variable from outside of its scope.
// we can access it only through c1

console.log(count);     // ReferenceError will occur
