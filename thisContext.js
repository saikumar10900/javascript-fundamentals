console.log(this);

function hi(){
    console.log(this);
}

const obj = {
    name: "saikumar",
    welcome: function hello(){
        console.log(this);
    }
};

hi();
obj.welcome();

