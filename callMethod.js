// call method usage
let name = {
    fs: "Saikumar",
    ls: "Bolisetti",
};
                                
let getFullName = function(){
    console.log(this.fs + " " + this.ls);
};

getFullName.call(name);         // Saikumar Bolisetti


