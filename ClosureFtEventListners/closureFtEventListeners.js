function buttonClicks(){
    let count = 0;
    document.getElementById('clickMe').addEventListener('click', function xyz(){
        console.log('Button clicked: ', ++count);
    });
}

buttonClicks();

// here, we have hidden the value of count and formed a closure with the function xyz
