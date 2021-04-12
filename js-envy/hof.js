const sayHi = (name) => "Hello " + name

function hof(welcomeFunc) {
    console.log(welcomeFunc())
    //do work
    console.log("Bye!")
}

hof(() => sayHi("Chris"))
