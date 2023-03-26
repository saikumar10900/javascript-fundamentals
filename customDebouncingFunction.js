function getSearchResults(searchValue){
    console.log(`Making API Call for ${searchValue}`);
}

let debounceSearchResults = function (fn, delay){
    let timer = '';
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
};

let debouncedFunction = debounceSearchResults(getSearchResults, 300);

document.getElementById("search").addEventListener("keyup", e => {
    debouncedFunction(e.target.value);
});

