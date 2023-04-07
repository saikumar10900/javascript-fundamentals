// call method usage
// call method works just as a normal function call in which we can pass arguments and the first argument should be context object.


let name = {
    fs: "Saikumar",
    ls: "Bolisetti",
};
                                
let getFullName = function(hometown, state){
    console.log(this.fs + " " + this.ls + " from " + hometown + ", " + state);
};

getFullName.call(name, "YGL", "AP");         // Saikumar Bolisetti from YGL, AP

