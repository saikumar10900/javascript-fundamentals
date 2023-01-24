let name = {
    fs: "Saikumar",
    ls: "Bolisetti"
};

let printFullName = function(town, country){
    console.log(this.fs + " " + this.ls + " from " + town + ", " + country);
};

let getMyName = printFullName.bind(name, "YGL");
getMyName("India");     // Saikumar Bolisetti from YGL, India

Function.prototype.mybind = function(...args){
    let cb = this
    let params = args.slice(1);
    return function(...params2){
        cb.apply(args[0], [...params, ...params2]);
    }
};

let getMyName2 = printFullName.mybind(name, "KDP");
getMyName2("India");    // Saikumar Bolisetti from KDP, India


