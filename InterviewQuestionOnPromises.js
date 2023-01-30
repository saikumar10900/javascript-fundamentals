let sayHello = () => {
    return new Promise((resolve, reject) => reject("You're Fired!"));
};

sayHello().then(res => console.log("Resolved 1"))
.catch(err1 => console.log(err1))
.then(err2 => console.log("Resolved 2"))
.then(err3 => console.log("Resolved 3"))
.then(err4 => console.log("Resolved 4"))
.then(err5 => console.log("Resolved 5"))

// output is as follows

// You're Fired!
// Resolved 2
// Resolved 3
// Resolved 4
// Resolved 5
