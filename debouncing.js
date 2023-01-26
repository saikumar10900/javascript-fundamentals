let counter = 0;

const getDatafromAPI = function(){
    console.log("Fetching data..", counter++);
};

const debouncingFunction = function(fn, delay){
    let timer;
    return function(){
        let context = this, args = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            fn.call(context, args);
        }, delay);
    };
};

const getResults = debouncingFunction(getDatafromAPI, 300);
