// throttling technique will limit the rate of function calls made by the user.
// It doesn't call the function if it is recently invoked.
// How many times the user invokes the function but throttling makes the function invokes after certain time set to it.


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

