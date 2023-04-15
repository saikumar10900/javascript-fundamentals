// const declarations are hoisted in the temporal deadzone for the time being.
// we can't access any variables in the temporal deadzone.
// let and const variables doesn't get attached to the window object, means we can't access them in the console window by this.variable or window.variable.

const a = 10;
a = 20;   // throws an error

// if const value can't be changed once it is initialized
