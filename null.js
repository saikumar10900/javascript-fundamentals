// null and undefined are treated as false


if(null || undefined ) {
    console.log('both are true');
} else {
    console.log('both are false');  // both are false
}

console.log(!null); // true
console.log(!!null); // false

