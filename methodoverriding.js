"use strict";
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
let obj = new Dog();
obj.sound();
