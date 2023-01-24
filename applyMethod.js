// apply method usage
// difference between call and apply is that we pass arguments in a list to the function.

let name = {
    fs: "Saikumar",
    ls: "Bolisetti",
};
                                
let getFullName = function(hometown, state){
    console.log(this.fs + " " + this.ls + " from " + hometown + ", " + state);
};

getFullName.apply(name, ["YGL", "AP"]);         // Saikumar Bolisetti from YGL, AP

