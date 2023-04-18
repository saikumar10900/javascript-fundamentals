// the context of this keyword works a kind of different in each scenario
// the context is completely dependent on where the function call is being made.


console.log(this);  // window

function hi(){
    console.log(this);  // window
}

const hello = () => {
    console.log(this)   // window
}

const obj = {
    name: "saikumar",
    welcome: function hello(){
        console.log(this);  // Object
    }
};

hi();
hello();
obj.welcome();

