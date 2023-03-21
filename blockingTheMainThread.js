console.log("Start");

setTimeout(function() {
    console.log("Timer expired");
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log('10000 timer expired');

// Here, the output will be like
// Start
// 10000 timer expired
// Timer expired

// this is because of setTimeout doesn't give guarantee to execute the callback function
// after certain time.
// here, we are blocking the main thread manually.
