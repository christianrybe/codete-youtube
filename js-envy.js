class Dog {
    bark() {
        return "woof"
    }
}

const dog = new Dog()
const method = dog.bark


const sayHi = (name) => "Hello " + name

function hof(welcomeFunc) {
    console.log(welcomeFunc())
    //do work
    console.log("Bye!")
}

hof(() => sayHi("Chris"))
