document.getElementById("parent").addEventListener('keyup', (e) => {
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});
