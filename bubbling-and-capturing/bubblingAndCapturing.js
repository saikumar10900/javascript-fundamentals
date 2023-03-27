// if you don't provide any boolean value true/false to the event listener, by default it will take false which means it performs bubbling.
// to justify the below example if you click on child element the output will be like "Parent Clicked".


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
