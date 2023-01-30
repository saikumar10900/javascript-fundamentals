let obj1 = {
    name: "Sai",
    city: "KDP",
    getIntro: function(){
        return this.name + " from " + this.city;
    }
};

console.log(obj1.name);         // Sai
console.log(obj1.city);         // KDP
console.log(obj1.getIntro());   // Sai from KDP

let obj2 = {
    name: "Saikumar"
};

// NEVER DO THIS, SHOWING FOR DEMONSTRATION PURPOSE
obj2.__proto__ = obj1;  // here, we are changing the proto of obj2 and setting it to obj1

console.log(obj2.name);         // Saikumar
console.log(obj2.city);         // KDP
console.log(obj2.getIntro());   // Saikumar from KDP

// if can see we aren't defined any city or getIntro properties to obj2, still we are able to get the output.
// Here, the JS engine first search in its own area, then moves out to the PropTypes it has, called as Prototypal Inheritance
// If we go deep down to the hierarchy, we get null as the result
// obj.__proto__.__proto__.__proto__ is null
