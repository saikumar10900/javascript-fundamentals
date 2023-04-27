// creating class instance in JavaScript
// class name should start with capital letter
// we use new keyword to create a new class instance.

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const user1 = new User("Saikumar", 22);
console.log(user1);         // User Object with name, age
console.log(user1.name);    // Saikumar
console.log(user1.age);     // 22



