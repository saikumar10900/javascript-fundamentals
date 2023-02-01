const expensive = () => {
    console.log("Expensive function called...");
};

const throttle = (eFunc, limit) => {
    let flag = true;
    return function(){
        if(flag){
            let context = this, args = arguments;
            eFunc.apply(context, args);
            flag = false;
            setTimeout(() => {
                eFunc();
                flag = true;
            }, limit);
        }
    };
};

const betterExpensive = () => {
    throttle(expensive, 300);
};

window.addEventListener("resize", betterExpensive);

