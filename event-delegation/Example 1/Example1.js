document.getElementById("parent").addEventListener('click', (e) => {
    console.log(e.target.innerText + " is clicked!");
    if(e.target.tagName === "LI"){
        window.location.href = "/" + e.target.id;
    }
});

