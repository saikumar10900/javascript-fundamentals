// freeze method takes an object and freeezes it
// means you can't change the properties of the object.


const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
