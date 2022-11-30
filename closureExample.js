function x(){
    let a = 100;
    function y(){
        console.log(a);
    }
    return y;
}

const z = x();
z(); // 100
