// call method usage
let name = {
    fs: "Saikumar",
    ls: "Bolisetti",
};
                                
let getFullName = function(hometown, state){
    console.log(this.fs + " " + this.ls + " from " + hometown + ", " + state);
};

getFullName.call(name, "YGL", "AP");         // Saikumar Bolisetti from YGL, AP

