// bind method usage
// bind method gives us the function which we can use sometime in the program

let name = {
    fs: "Saikumar",
    ls: "Bolisetti",
};
                                
let getFullName = function(hometown, state){
    console.log(this.fs + " " + this.ls + " from " + hometown + ", " + state);
};

let bindMethod = getFullName.bind(name, "YGL", "AP");
bindMethod();   // // Saikumar Bolisetti from YGL, AP


