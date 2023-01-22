function Counter(){
    var count = 0;
    this.incrementCount = function (){
        count++;
        console.log(count);
    }
    this.decrementCount = function (){
        count--;
        console.log(count);
    }
}

var c1 = new Counter(); // incrementCount function will be returned and stored in c1
c1.incrementCount()     // 1
c1.incrementCount()     // 2
c1.decrementCount()     // 1

// this code is scalable
