document.getElementById("grandparent").addEventListener('click', () => {
    console.log("Grandparent Clicked!");
}, false);

document.getElementById("parent").addEventListener('click', (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation();
}, true);

document.getElementById("child").addEventListener('click', () => {
    console.log("Child Clicked!");
}, true);