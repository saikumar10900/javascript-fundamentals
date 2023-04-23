// even if the js file doesn't have any code in it, still the browser does it part of initializing the memory component for it and it does have window and this object.

console.log(this);              // window object
console.log(window);            // window object
console.log(this === window);   // true
