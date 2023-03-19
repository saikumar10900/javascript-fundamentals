// Write a program to print n numbers after n seconds

function printNumbers(){
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000);
    }
}
printNumbers(); // 6 6 6 6 6 

function printNumbers(){
    for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000);
    }
}
printNumbers(); // 1 2 3 4 5

function printNumbers(){
    for (var i = 1; i <= 5; i++) {
        function closure(number){
            setTimeout(function() {
                console.log(number)
            }, number * 1000);
        }
        closure(i)
    }
}
printNumbers(); // 1 2 3 4 5
